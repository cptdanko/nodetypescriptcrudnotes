import { Request, Response } from "express";
import getAllUsers from "./getAllUsers";

describe("Users test", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let responseObj: Object;

    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            statusCode: 0,
            send: jest.fn().mockImplementation(result => {
                responseObj = result;
            })
        }
    });

    test("200 - users", () => {
        const expectStatCode = 200;
        const expectResp = [
            {
                name: "Bhuman",
                age: 40
            },
            {
                name: "Yakang",
                age: "32"
            }
        ];

        getAllUsers(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.statusCode).toBe(expectStatCode);
        expect(responseObj).toEqual(expectResp);

    });

})