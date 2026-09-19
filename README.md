# Learning Mongoose

A Node.js and Express.js application that connects to MongoDB using Mongoose and provides REST APIs to create and retrieve users.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- Thunder Client / Postman

## Project Structure

```text
Learning-mongoose/
│
├── model/
│   └── userModel.js
│
├── router/
│   └── userRouter.js
│
├── schema/
│   └── userSchema.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js

Features
Connects Express.js with MongoDB using Mongoose
Creates a Mongoose user schema
Creates a Mongoose user model
Adds new users to MongoDB
Retrieves all users from MongoDB
Uses separate schema, model, router, and server files
Handles database and API errors
User Schema

The application stores the following user details:

Field	Type	Required
name	String	Yes
email	String	Yes
age	Number	Yes
course	String	Yes
API Endpoints
1. Create User

POST

http://localhost:3000/api/users
Request Body
{
    "name": "Aditya",
    "email": "Adi@gmail.com",
    "age": 19,
    "course": "B-tech"
}
Response
{
    "message": "User added successfully",
    "user": {
        "_id": "...",
        "name": "Aditya",
        "email": "Adi@gmail.com",
        "age": 19,
        "course": "B-tech"
    }
}
2. Get All Users

GET

http://localhost:3000/api/users
Response
[
    {
        "_id": "...",
        "name": "Aditya",
        "email": "Adi@gmail.com",
        "age": 19,
        "course": "B-tech"
    }
]
MongoDB Connection

The application connects to MongoDB using Mongoose.

Example connection:

mongoose.connect('mongodb://127.0.0.1:27017/userDB')

After a successful connection, the terminal displays:

MongoDB connected successfully
Installation

Clone the repository:

git clone https://github.com/adiii-0710/Learning-mongoose.git

Navigate to the project:

cd Learning-mongoose

Install dependencies:

npm install
Run the Application

Start the server:

node server.js

The application runs on:

http://localhost:3000
API Testing

The APIs can be tested using:

Thunder Client
Postman
POST
POST http://localhost:3000/api/users
GET
GET http://localhost:3000/api/users
Concepts Covered
Node.js
Express.js
MongoDB
Mongoose
Mongoose Schema
Mongoose Model
Express Router
REST API
HTTP GET and POST requests
JSON request and response
MongoDB CRUD basics
