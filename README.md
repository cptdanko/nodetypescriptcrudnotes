# NodeJS Express note taking API
 A backend, REST API for a note taking app built with NodeJS, Express and Typescript with multiple storage options. In this repo data can be saved to both localStorage and AWS DynamoDB.

I will be writing a [blogpost] about my thoughts on building a react app with yarn soon.

## Repo features ...
This repo has the following features
- a REST API to CRUD notes
- Using Express, NodeJS library with Typescript 
- postman collection for testing endpoints
- yarn package manager
- test coverage using JEST
- nodemon for running the API during development

## Libraries used
| Library | Library homepage |
| ------ | ------ |
| NodeJS with Express | https://expressjs.com/
| Typescript | https://www.typescriptlang.org/ |
| Node-LocalStorage | https://www.npmjs.com/package/node-localstorage |
| AWS DynamoDB | https://aws.amazon.com/dynamodb/ |
| Postman | https://www.postman.com/ |
| yarn | https://yarnpkg.com/ |
| Nodemon | https://www.npmjs.com/package/nodemon |

# Installation and setup
```sh
git clone git@github.com:cptdanko/nodetypescriptcrudnotes.git
cd nodetypescriptcrudnotes/
yarn install
```
### Run in dev mode
Running in dev mode means, all your changes to the source file will be immediately available. To start in dev mode, use
```sh
yarn devStart
```
Wait to see the message `Started listening on 3000 (or whatever other default port you've set)` 
### Run in production
To run in production, means to test how the app will run after you deploy it on a server e.g. AWS Elastic Beanstalk. To test this, you must first build the app, following by starting it i.e. use the following commands
```sh
yarn build
yarn start
```

# Storage options demonstrated in thie repo
### LocalStorage 
The default storage setting in this repo and if you have worked with localStorage on client-side Javascript then you know exactly how to work with this. 
### AWS DynamoDB
If you have worked with NoSQL databases like MongoDB before, then this is Amazon's answer to that. The only thing is that it may take you some time to get famaliar with this. For me, it took me an entire day and an hour the next day to fully integrate CRUD operations for this repo. One way to ensure, this backend works with your AWS account is by adding the following environment variables
```sh
export AWS_ACCESS_KEY_ID=your-access-key-id
export AWS_SECRET_ACCESS_KEY=your-secret-key
```
Have a look at the [AWS docs] for more on this. You may also want to change the AWS region on [line 17] to the region of your AWS account

# Any help?
If you have difficulty understanding anything about this repo, feel free to reach out to me through this Github account or at bhuman at mydaytodoDOTcom or bhumanDOTsoniATgmailDOTcom. 

# More great tutorials and code samples
I will be writing a detailed tutorial on how to work with this repo on my blog. Until then refer to [my blog] for other tutorials and "how-to" articles with detailed code samples.

If you like what I am doing, you can [buy me a coffee]

Click on the next link for more info on the 13+ year [software engineering career journey] of the author.

[my blog]: https://mydaytodo.com/blog/
[line 17]: https://github.com/cptdanko/nodetypescriptcrudnotes/blob/main/src/db.ts#L17
[AWS docs]: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html
[blogpost]: https://mydaytodo.com/blog/
[this blog]: https://mydaytodo.com/blog/
[buy me a coffee]: https://www.buymeacoffee.com/bhumansoni
[software engineering career journey]: https://mydaytodo.com/the-3-stages-of-a-software-engineering-career/
