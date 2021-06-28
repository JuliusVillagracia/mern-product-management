# mern-product-management

## Author
https://github.com/JuliusVillagracia

## About
### What it is
The full-stack web application is built with the MERN Stack. It focuses on the implementation of a RESTful API.

### What it does
The site lets the user manage a database of products, this includes creating, reading, updating, and deleting product records.

### What it uses
- MongoDB v4.4.3^
- Express v4.17.1^
- React v16.13.1^
- Nodejs v12.18.3^

## Executing Locally (Windows)
We will be needing three terminals
### Database
1. Open the first terminal and redirect to the database path: `cd ../mern-product-management/server/db`
2. Start the database and use the current directory as its path: `mongod --dbpath %cd%`

### Server Side
1. Open a second terminal and redirect to the backend path: `cd ../mern-product-management/server`
2. Install all backend dependencies: `npm install`
3. Start the server: `npm start`

### Client Side
1. Open one last terminal and redirect to the frontend path: `cd ../mern-product-management/frontend`
2. Install all frontend dependencies: `npm install`
3. Begin the application: `yarn start`
4. Wait for it to open in: `localhost:3000`