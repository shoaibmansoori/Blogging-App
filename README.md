# Blog Application

## Overview

This is a full-stack blog application built using Node.js, Express, MongoDB, and React. The application allows users to create, view, edit blog posts. It includes a locking mechanism to prevent concurrent edits on blog posts.

## Features

- User authentication (signup and login)
- Create, view, edit blog posts
- Lock mechanism to handle concurrent edits

## Technologies

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React, React Router
- **Authentication**: JWT, bcrypt
- **Styling**: CSS

## Installation

### Backend

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-repo/blog-application.git
    cd blog-application
    ```

2. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `backend` directory with the following content:

    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. **Run the server:**

    ```bash
    npm start
    ```

### Frontend

1. **Navigate to the frontend directory:**

    ```bash
    cd ../frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm start
    ```

## API Endpoints

### User Authentication

- **Signup**

    - **Endpoint**: `POST /api/signup`
    - **Request Body**: 
      ```json
      {
        "username": "string",
        "email": "string",
        "password": "string"
      }
      ```
    - **Response**: 
      ```json
      {
        "token": "jwt_token"
      }
      ```

- **Login**

    - **Endpoint**: `POST /api/login`
    - **Request Body**: 
      ```json
      {
        "email": "string",
        "password": "string"
      }
      ```
    - **Response**: 
      ```json
      {
        "token": "jwt_token"
      }
      ```

### Blog Posts

- **Create Blog**

    - **Endpoint**: `POST /api/blogs`
    - **Request Body**: 
      ```json
      {
        "title": "string",
        "content": "string"
      }
      ```
    - **Response**: 
      ```json
      {
        "_id": "string",
        "title": "string",
        "content": "string",
        "createdAt": "date",
        "lockedBy": "user_id"
        "isLocked": "boolean"
      }
      ```

- **Get All Blogs**

    - **Endpoint**: `GET /api/blogs`
    - **Response**: 
      ```json
      [
        {
          "_id": "string",
          "title": "string",
          "content": "string",
          "createdAt": "date",
          "lockedBy": "user_id",
          "isLocked": "boolean"
        }
      ]
      ```

- **Edit Blog**

    - **Endpoint**: `PUT /api/blogs/:id`
    - **Request Body**: 
      ```json
      {
        "title": "string",
        "content": "string"
      }
      ```
    - **Response**: 
      ```json
      {
        "_id": "string",
        "title": "string",
        "content": "string",
        "createdAt": "date",
        "lockedBy": "user_id",
        "isLocked": "boolean"
      }
      ```


- **Lock Blog**

    - **Endpoint**: `POST /api/blogs/:id/lock`
    - **Request Body**: 
      ```json
      {
        "userId": "user_id"
      }
      ```
    - **Response**: 
      ```json
      {
        "message": "Blog locked successfully"
      }
      ```

## Concurrency Control

The locking mechanism is implemented as follows:

1. **Lock Blog**: When a user clicks "Edit" on a blog post, an API call is made to lock the blog. This sets `isLocked` to `true` for the blog.
2. **Unlock Blog**: When the user finishes editing and updates the blog, an API call is made to unlock the blog by setting `isLocked` to `false`.

## Error Handling

If an error occurs (e.g., trying to lock a blog that is already locked), an appropriate error message is returned to the frontend for display.

## Notes

- Make sure to replace `your_mongodb_connection_string` and `your_jwt_secret` in the `.env` file with your actual MongoDB connection string and JWT secret.
- Adjust the `backend` and `frontend` paths based on your project structure.


