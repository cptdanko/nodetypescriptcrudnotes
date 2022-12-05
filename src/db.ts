/* global localStorage, */
import { Console } from 'console';
import { LocalStorage } from 'node-localstorage';
import { boolean } from 'yargs';
import { deleteNote, Note } from './routes/crudNotes';

const NOTE_KEY = 'notes';
export interface DBResult {
    message: string;
    code: number;
}

export class DB {
    notesStore:string  | null = null;
    
    private _lastId:number = 0;
    
    getAllNotes(): Note[] {
        let notes: Note[] = [];
        if(this.notesStore == null) {
            return [];
        } else {
            if(this.notesStore) {
                notes = JSON.parse(this.notesStore);    
            }
        }
        // const notesStr = localStorage.getItem(NOTE_KEY) ? localStorage.getItem(NOTE_KEY) : null;
        return notes;
    }
    saveNotes(allNotes: Note[]) {
        this.notesStore = JSON.stringify(allNotes);
    }
    saveNote(note: Note) {
        const allNotes: Note[] = this.getAllNotes();        
        note.id = this._lastId += 1;
        allNotes.push(note);
        this.saveNotes(allNotes);
        //localStorage.setItem(JSON.stringify(allNotes), NOTE_KEY);
    }
    updateNote(id: number, note: Note): Note | null {
        const allNotes: Note[] = this.getAllNotes();        
        let existingNoteIdx: number = 0;
        const existingNote = allNotes.find((temp, idx) => {
            if(temp.id == id) {
                existingNoteIdx = idx;
                return temp;
            }
        });
        if(existingNote) {
            existingNote.date = note.date;
            existingNote.text = note.text;
            existingNote.user = note.user;
            allNotes[existingNoteIdx] = existingNote;
            allNotes.splice(existingNoteIdx, 1, existingNote);
            this.saveNotes(allNotes);
            return existingNote;
        }
        return null;
    }
    deleteNote(id: number): DBResult {
        const allNotes: Note[] = this.getAllNotes();
        const foundNote = allNotes.find(note => note.id == id);
        if(foundNote) {
            allNotes.splice(allNotes.indexOf(foundNote), 1);
            this.saveNotes(allNotes);
            return { message: "", code: 204 };
        }
        return { message: `Unable to find a note with id: ${id}`, code: 404};
    }
}