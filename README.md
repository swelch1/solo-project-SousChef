# SousChef
If you love to cook, but can never seem to decide on a recipe, then SousChef is for you! Search, browse, save, and filter recipes based on specific criteria; Hate cooking long meals that have you schlepping for hours? Love Asian food but don't care for numerous ingrendients? SousChef helps you find the right recipe so you can get back to cooking the way you love!

## Getting Started 
Clone the project repo `git clone https://github.com/swelch1/solo-project-SousChef.git`

`cd solo-project-SousChef` to access the project's root folder

Install dependencies and run the app

`cd client`

`npm install`

`npm start` to start the client;

`cd ../server`

`npm install`

In order to run the server, you will need to create a cloud MongoDB database: [MongoDB Atlas](https://www.mongodb.com/atlas/database)

Lastly, you will need to configure an environment file to specify the server port and database URI. Create a file named '.env' within the current directory.
Add the below: 

    {
      DATABASE = '(your database URI)'
      PORT = (port number)
    }
* the React client will run on port 3000, so you must choose a different port

`npm run dev` to start the server

Happy Searching!

## Tech Stack
#### Back-end
[Node](https://nodejs.dev/)

[Express](https://expressjs.com/)

[MongoDB](https://www.mongodb.com/) and [Mongoose](https://mongoosejs.com/)

[Typescript](https://www.typescriptlang.org/)
#### Front-end
[React](https://reactjs.org/)

[Redux Toolkit](https://redux-toolkit.js.org/)

[Typescript](https://www.typescriptlang.org/)

## A web app by:

Sam Welch

[Github](https://github.com/swelch1) [Linkedin](https://www.linkedin.com/in/samuel-welch/)
