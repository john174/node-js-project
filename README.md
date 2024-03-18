# Node.js Task Manager API

This project is a Node.js-based Task Manager API that allows users to manage their tasks efficiently. It utilizes MongoDB for data storage, Express for the server framework, and JWT (JSON Web Tokens) for user authentication.

## Features

- User registration and login system
- Task creation, retrieval, updating, and deletion
- Task status management (pending, in progress, completed)
- User authentication and token management

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-github-username/your-repo-name.git
cd your-repo-name
npm install

## Setup

Create a `.env` file in the root directory of your project and add the following variables:

```dotenv
PORT=3000
JWT_SECRET=your_jwt_secret
MONGODB_URI=mongodb://localhost:27017/your_db_name

Running the Application
Start the server with:

bash
Copy code
npm start
The server will run on http://localhost:3000/ or on a port that you have specified in the .env file.

API Endpoints
Auth Routes
POST /auth/register: Register a new user.
POST /auth/login: Login a user and return a JWT.
Task Routes
GET /tasks/: Retrieve all tasks for the authenticated user.
POST /tasks/: Create a new task.
PATCH /tasks/:taskId: Update an existing task.
DELETE /tasks/:taskId: Delete a task.
Authentication
This API uses JWT for user authentication. Include the token in the Authorization header as Bearer <your_token> for routes that require authentication.

Models
User Model
username: Unique username required.
email: User's email, must be unique and in valid format.
password: Hashed password.
Task Model
title: Task title, required.
description: Task description.
status: Task status, defaults to 'pending'.
deadline: Task deadline date.
user: Reference to the User who created the task.
vbnet
Copy code

Make sure to replace the triple backtick sections for `.env` and `bash` code blocks after copying, as nesting code blocks within code blocks can't be accurately represented in Markdown. When you add this content to your GitHub README.md file, adjust these sections accordingly to ensure proper formatting.





