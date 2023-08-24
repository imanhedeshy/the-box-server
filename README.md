# BrainStation BOX Server

<div align="center">
  <img src="your-logo.png" alt="BrainStation BOX Logo">
</div>

## Overview

Welcome to the BrainStation BOX server application! This is the back-end that powers our yearbook and social networking platform.

## Features

- 🌐 RESTful API for client communication
- 🔒 Authentication and authorization using JWT
- 📊 Database powered by MySQL
- 📁 Structured endpoints for different features
- 📦 Modular architecture for easy maintenance

## Tech Stack

- 🚀 Express.js for building the server
- 🌐 MySQL for database management
- 🔒 Passport.js for authentication strategies
- 📊 Knex.js for query building
- 💬 Socket.io for real-time chat functionality

## Installation

1. Clone the repository.
2. Navigate to the project folder: `cd brainstation-box-server`.
3. Install dependencies: `npm install`.
4. Set up environment variables: Copy `.env.sample` to `.env` and configure.
5. Run the server: `npm start`.

## API Documentation

The API endpoints are detailed in [API_DOCS.md](API_DOCS.md). Here's a sample of key endpoints:

- POST /auth/register: User registration
- POST /auth/login: User login
- GET /profile/:userId: Get user profile
- POST /posts: Create a new post
- GET /posts/:postId: Get a specific post
- ...

## Database Schema

The MySQL database schema includes tables for users, posts, comments, and more. Details can be found in [DATABASE.md](DATABASE.md).
