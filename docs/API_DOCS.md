# TheBOX! API Documentation

This document provides detailed information about the API endpoints available in TheBOX! application. These endpoints facilitate various functionalities such as user management, thread interactions, and real-time messaging.

## User Endpoints

### Register a New User
- **Endpoint**: `/users/register`
- **Method**: `POST`
- **Body**:

```
{
"name": "string",
"username": "string",
"email": "string",
"password": "string",
"userType": "string",
"bio": "string"
}
```

- **Response**: A JSON object containing the newly created user's information along with an authentication token.

### User Login
- **Endpoint**: `/users/login`
- **Method**: `POST`
- **Body**:

```
{
"username": "string",
"password": "string"
}
```

- **Response**: A JSON object containing the user's information and an authentication token.

### Get All Users (for Expo Cards)
- **Endpoint**: `/users`
- **Method**: `GET`
- **Response**: An array of users with their details for Expo cards.

### Validate JWT Token
- **Endpoint**: `/users/validate`
- **Method**: `GET`
- **Response**: Boolean indicating whether the JWT token is valid.

### Get User Profile by Username
- **Endpoint**: `/users/:username`
- **Method**: `GET`
- **Response**: User profile information based on the provided username.

## Thread Endpoints

### Get Threads for a Specific ID
- **Endpoint**: `/threads`
- **Method**: `GET`
- **Response**: An array of threads including comments and likes counts.

### Create a New Thread
- **Endpoint**: `/threads`
- **Method**: `POST`
- **Body**:

```
{
"user_id": "number",
"content": "string"
}
```

- **Response**: Details of the newly created thread.

### Like a Thread by ID
- **Endpoint**: `/threads`
- **Method**: `PUT`
- **Body**:

```{
"user_id": "number",
"thread_id": "number"
}
```

- **Response**: ID of the new like record.

### Create a Comment for a Thread
- **Endpoint**: `/threads/:id`
- **Method**: `POST`
- **Body**:

```
{
"user_id": "number",
"thread_id": "number",
"content": "string"
}
```

- **Response**: Details of the newly created comment.

### Delete a Thread by ID
- **Endpoint**: `/threads/:id`
- **Method**: `DELETE`
- **Response**: Confirmation message indicating successful deletion.

## Real-time Messaging

### Connection Event
- **Event**: `connection`
- **Functionality**: On connecting to the socket, broadcasts the chat history.

### Chat Message Event
- **Event**: `chat message`
- **Functionality**: Broadcasts the chat message to all connected clients and saves it to the database.

---

Please ensure that you are authorized and have a valid token for accessing protected endpoints. The routes and functionalities may evolve as the project develops further.
