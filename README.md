# TheBOX! Server

<div align="center" style="width: 30%;">
  <img src="./assets/images/logos/the-box-logo.jpg" alt="TheBOX! Logo">
</div>

## Overview

Welcome to TheBOX! server application! This backend powers our yearbook and social networking platform, featuring a robust RESTful API, secure authentication, and real-time functionalities.

## Features

- 🌐 RESTful API for client-server communication.
- 🔒 Secure authentication and authorization using JWT.
- 📊 MySQL database integration.
- 📁 Structured endpoints catering to various platform features.
- 📦 Modular and maintainable architecture.

## Tech Stack

- 🚀 Express.js for the server framework.
- 🌐 MySQL for database management.
- 🔒 Passport.js for handling authentication strategies.
- 📊 Knex.js for SQL query building.
- 💬 Socket.io for real-time chat functionality.
- 🌟 TypeScript for type-safe code.

## Installation

1. Clone the repository.
2. Navigate to the project folder: `cd the-box-server`.
3. Install dependencies: `npm install`.
4. Set up environment variables: Copy `.env.sample` to `.env` and configure.
5. Compile TypeScript to JavaScript: `npm run build`.
6. Start the server: `npm start`.

## Deployment

This application is ready for deployment to Heroku, with necessary scripts and configurations for a smooth CI/CD process. Ensure that the Heroku CLI is installed and configured for deployment.

## API Documentation

Explore our API endpoints in [API_DOCS.md](./docs/API_DOCS.md). Key endpoints include:

- POST /auth/register: Register a new user.
- POST /auth/login: Authenticate a user.
- GET /profile/:userId: Retrieve user profile information.
- POST /posts: Create a new post.
- GET /posts/:postId: Fetch a specific post.
- ...

## Database Schema

Our MySQL schema comprises tables for users, posts, comments, etc. Detailed schema information is available in [DATABASE.md](./docs/DATABASE.md).

## Project Structure

Below is the structure of the TheBOX! server project:

```
the-box-server/
│
├── assets/
│ └── images/
│ └── logos/
│ └── the-box-logo.jpg
├── config/
│ ├── aws.js
│ └── ...
├── controllers/
│ ├── s3Controller.js
│ ├── threadController.js
│ ├── userController.js
│ └── ...
├── db/
│ ├── migrations/
│ └── seeds/
├── docs/
│ ├── API_DOCS.md
│ ├── CONTRIBUTING.md
│ ├── DATABASE.md
│ ├── LICENSE.md
│ └── STRUCTURE.md
├── middlewares/
│ └── authenticate.js
├── routes/
│ ├── s3Routes.js
│ ├── threadRoutes.js
│ ├── userRoutes.js
│ └── ...
├── sockets/
│ └── socketHandler.js
├── utils/
│ ├── authentications.js
│ ├── passwords.js
│ └── validators.js
├── .env
├── .gitignore
├── index.html
├── index.js
├── index.ts
├── knexfile.js
├── package-lock.json
├── package.json
└── README.md
```


Please note that the structure is a simplified representation and should be updated to accurately reflect any future changes or additions to the project.

## Contribution

Contributions to TheBOX! server are welcomed. Please read [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is strictly proprietary under the terms outlined in [LICENSE.md](./docs/LICENSE.md). Use and contribution must comply with these terms.

Thank you for exploring TheBOX!, a platform that brings yearbook experiences into the digital age.

- [Iman Hedeshy](https://github.com/imanhedeshy)