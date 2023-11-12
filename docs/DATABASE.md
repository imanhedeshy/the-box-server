# BrainStation BOX Server Database Schema

This document provides detailed information about the database schema used in the BrainStation BOX server.

## Table: `users`

| Field            | Data Type     | Constraints             | Description                      |
| ---------------- | ------------- | ----------------------- | -------------------------------- |
| id               | Integer       | PRIMARY KEY, AUTO INCR  | Unique identifier for the user   |
| name             | String        |                         | User's full name                 |
| username         | String        | NOT NULL, UNIQUE        | User's unique username           |
| email            | String        | NOT NULL, UNIQUE        | User's email address             |
| password_hash    | String        | NOT NULL                | Hashed password for security     |
| background_image | String        |                         | URL of the user's background image|
| profile_pic      | String        |                         | URL of the user's profile picture|
| headline         | String        |                         | User's headline                  |
| location         | String        |                         | User's geographic location       |
| industry         | String        |                         | User's industry of work          |
| user_type        | Enum          |                         | Type of user (Odin, student, etc.)|
| bio              | Text          |                         | User's biography                 |
| phone            | String        |                         | User's phone number              |
| slack            | String        |                         | User's Slack handle              |
| website          | String        |                         | User's personal website          |
| linkedin         | String        |                         | User's LinkedIn profile          |
| github           | String        |                         | User's GitHub profile            |
| twitter          | String        |                         | User's Twitter handle            |
| facebook         | String        |                         | User's Facebook profile          |
| instagram        | String        |                         | User's Instagram handle          |
| video_source_1   | String        |                         | URL to user's first video source |
| video_source_2   | String        |                         | URL to user's second video source|
| resume_link      | String        |                         | URL to user's resume             |

## Table: `cohorts`

| Field        | Data Type | Constraints          | Description                              |
| ------------ | --------- | -------------------- | ---------------------------------------- |
| id           | Integer   | PRIMARY KEY, AUTO INCR | Unique identifier for the cohort        |
| name         | String    | NOT NULL             | Name of the cohort                       |
| campus       | Enum      | NOT NULL             | Campus location (Toronto, Vancouver, etc.)|
| discipline   | Enum      | NOT NULL             | Study discipline (Software Engineering, UX Design, etc.)|
| type         | Enum      | NOT NULL             | Type of study (full-time, part-time)     |
| start_date   | Date      | NOT NULL             | Start date of the cohort                 |
| user_id      | Integer   | FOREIGN KEY          | Reference to `users(id)`                 |

## Table: `yearbooks`

| Field           | Data Type | Constraints             | Description                       |
| --------------- | --------- | ----------------------- | --------------------------------- |
| id              | Integer   | PRIMARY KEY, AUTO INCR  | Unique identifier for the yearbook|
| cohort_id       | Integer   | FOREIGN KEY, UNIQUE     | Reference to `cohorts(id)`        |
| start_date      | Date      | NOT NULL                | Start date of the yearbook        |
| cover_image_url | String    |                         | URL of the yearbook's cover image |
| description     | Text      |                         | Description of the yearbook       |

## Table: `threads`

| Field       | Data Type | Constraints             | Description                          |
| ----------- | --------- | ----------------------- | ------------------------------------ |
| id          | Integer   | PRIMARY KEY, AUTO INCR  | Unique identifier for the thread     |
| user_id     | Integer   | FOREIGN KEY, NOT NULL   | Reference to `users(id)`             |
| content     | Text      | NOT NULL                | Content of the thread                |
| created_at  | Timestamp | DEFAULT NOW()           | Timestamp of thread creation         |

## Table: `comments`

| Field       | Data Type | Constraints             | Description                          |
| ----------- | --------- | ----------------------- | ------------------------------------ |
| id          | Integer   | PRIMARY KEY, AUTO INCR  | Unique identifier for the comment    |
| user_id     | Integer   | FOREIGN KEY, NOT NULL   | Reference to `users(id)`             |
| thread_id   | Integer   | FOREIGN KEY, NOT NULL   | Reference to `threads(id)`           |
| content     | Text      | NOT NULL                | Content of the comment               |
| created_at  | Timestamp | DEFAULT NOW()           | Timestamp of comment creation        |

## Table: `likes`

| Field       | Data Type | Constraints             | Description                             |
| ----------- | --------- | ----------------------- | --------------------------------------- |
| id          | Integer   | PRIMARY KEY, AUTO INCR  | Unique identifier for the like          |
| user_id     | Integer   | FOREIGN KEY, NOT NULL   | Reference to `users(id)`                |
| thread_id   | Integer   | FOREIGN KEY             | Reference to `threads(id)` (optional)   |
| comment_id  | Integer   | FOREIGN KEY             | Reference to `comments(id)` (optional)  |

## Table: `projects`

| Field         | Data Type | Constraints             | Description                         |
| ------------- | --------- | ----------------------- | ----------------------------------- |
| id            | Integer   | PRIMARY KEY, AUTO INCR  | Unique identifier for the project   |
| title         | String    | NOT NULL                | Title of the project                |
| type          | String    | NOT NULL                | Type of the project                 |
| description   | String    |                         | Description of the project          |
| image_source  | String    | NOT NULL                | Image URL for the project           |
| link          | String    | NOT NULL                | Link to the project                 |
| user_id       | Integer   | FOREIGN KEY             | Reference to `users(id)`            |

## Table: `jobs`

| Field         | Data Type | Constraints             | Description                         |
| ------------- | --------- | ----------------------- | ----------------------------------- |
| id            | Integer   | PRIMARY KEY, AUTO INCR  | Unique identifier for the job       |
| title         | String    | NOT NULL                | Job title                           |
| type          | String    | NOT NULL                | Type of job (e.g., Full-time, Part-time) |
| description   | String    |                         | Job description                     |
| image_source  | String    | NOT NULL                | Image URL for the job               |
| link          | String    | NOT NULL                | Link to the job application         |
| user_id       | Integer   | FOREIGN KEY             | Reference to `users(id)`            |

## Table: `tech_stack`

| Field                 | Data Type | Constraints             | Description                              |
| --------------------- | --------- | ----------------------- | ---------------------------------------- |
| id                    | Integer   | PRIMARY KEY, AUTO INCR  | Unique identifier for the tech stack     |
| user_id               | Integer   | FOREIGN KEY             | Reference to `users(id)`                 |
| tech_stack            | Enum      | NOT NULL                | Technology stack (e.g., javascript, react) |
| tech_stack_source_link| String    | NOT NULL                | Link to the technology source            |

## Table: `messages`

| Field       | Data Type | Constraints             | Description                         |
| ----------- | --------- | ----------------------- | ----------------------------------- |
| id          | Integer   | PRIMARY KEY, AUTO INCR  | Unique identifier for the message   |
| name        | String    |                         | Sender's name                       |
| message     | String    | NOT NULL                | Content of the message              |
| user_id     | Integer   | FOREIGN KEY             | Reference to `users(id)`            |
| timestamp   | Timestamp |                         | Time when the message was sent      |

---

This schema is designed to support the various functionalities of TheBOX! server, ensuring robust and efficient data management and retrieval.
