# TASK MANAGEMENT APP 

This project is a simple task management app that uses Express in the backend, React in the front-end and Mongodb as database.

In this guide, setting up and running the project in a local environment explained in detail. 

1. Make sure, you have NodeJS and MongoDB in your local computer. 

You can check these installition guides: 
MongoDB: https://www.mongodb.com/docs/manual/installation/
NodeJS: https://nodejs.org/en

2. Clone the repository 
`git clone https://github.com/rerov/taskmanagement.git`

3. Open the terminal and go to the project directory. 
In the project directory, there is a directory called 'server'. The express server file is found here. 
First, the dependencies needs to be installed. So, go to the server directory. 
`cd server`

4. Install the dependencies
`npm install`

5. Start the express server 
`node index.js`

6. Starting React 
Go to the project directory, the dependencies will be installed with the following command. 
`npm install`

7. run the react application 
`npm start`

8. make sure

In the project directory, there is file ApiUrl.js in the src directory. This file consists of the base url for the backend application. Don't forget changing the url in this file, if you are planning to run the server in a different port. 

Note: environmental variable usage is suggested. 


