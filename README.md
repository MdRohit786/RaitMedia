# RaitMedia — Social Media Platform

A full-stack social media application inspired by modern microblogging platforms, built with the MERN stack. The project focuses on real-world authentication, user relationships, media uploads, post interactions, notifications, and efficient client-side data management.

## Overview

RaitMedia provides a focused social experience where users can create profiles, publish posts, interact with other users, and receive activity notifications.

The application follows a modular frontend/backend architecture designed to keep business logic maintainable and scalable.

## Features

* User registration and login with JWT-based authentication
* Secure password hashing with bcrypt
* Protected routes and authenticated sessions
* User profiles with editable information
* Profile and cover image uploads through Cloudinary
* Follow and unfollow functionality
* Suggested users
* Create and delete posts
* Image and text-based posts
* Like and unlike posts
* Comment on posts
* Personal posts and liked-post feeds
* For You and Following feeds
* User activity notifications
* Notification deletion and read-state management
* Dynamic profile and post timestamps
* Loading states and skeleton components
* Client-side caching and server-state synchronization with TanStack Query
* Responsive dark-themed interface

The application uses dedicated API routes for authentication, users, posts, and notifications, while protected endpoints are secured through authentication middleware.

## Technology Stack

### Frontend

* React
* Vite
* React Router
* Tailwind CSS
* DaisyUI
* TanStack Query
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token
* bcryptjs
* Cookie Parser
* CORS
* dotenv

### Services

* Cloudinary — image storage and media management

The backend is organized around routes, controllers, models, and middleware, while the frontend uses reusable components, hooks, utilities, and query-based data management.

## Architecture

```text
RaitMedia
│
├── frontend
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── utils
│   └── ...
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── db
│   └── lib
│
├── .env
├── package.json
└── README.md
```

The backend follows a controller-based structure to separate routing from application logic and database operations.

## Data Flow

```text
React UI
   │
   ▼
TanStack Query
   │
   ▼
REST API
   │
   ▼
Express Routes
   │
   ▼
Controllers
   │
   ├── MongoDB / Mongoose
   │
   └── Cloudinary
```

TanStack Query is used to handle server-state fetching, caching, mutations, refetching, and cache invalidation across the application.

## Authentication

Authentication is handled through JWT tokens stored in HTTP-only cookies.

The authentication flow includes:

1. User registration
2. Password hashing
3. JWT generation
4. Secure cookie storage
5. Authentication middleware
6. Protected API routes
7. Authenticated user retrieval

Protected requests are validated through the `protectRoute` middleware before accessing private resources.

## API Structure

| Module               | Purpose                                      |
| -------------------- | -------------------------------------------- |
| `/api/auth`          | Authentication and session management        |
| `/api/user`          | Profiles, follow system, and user management |
| `/api/post`          | Post creation and interactions               |
| `/api/notifications` | User activity notifications                  |

Post feeds support global posts, following-based posts, user-specific posts, and liked posts.

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

NODE_ENV=development

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Never commit your `.env` file or expose database credentials, JWT secrets, or Cloudinary credentials publicly.

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd RaitMedia
```

### 2. Install dependencies

```bash
npm install
npm install --prefix frontend
```

### 3. Configure environment variables

Create the `.env` file and add your MongoDB, JWT, and Cloudinary configuration.

### 4. Start the development server

```bash
npm run dev
```

The project uses Vite for frontend development and a Node/Express server for the backend.

## Production

Build the frontend and prepare the application with:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

In production, the Express server serves the built React application alongside the API.

## Project Highlights

### Efficient Server-State Management

TanStack Query keeps API data synchronized and reduces unnecessary requests through caching and query invalidation.

### Media Management

Profile images, cover images, and post images are uploaded to Cloudinary rather than being stored directly inside MongoDB.

### Consistent User Experience

The application includes loading states, skeleton components, toast notifications, dynamic timestamps, and protected navigation to provide a smoother experience.

### Scalable Structure

The separation of routes, controllers, models, middleware, hooks, and reusable components makes the codebase easier to extend and maintain.

## Screenshots

### Home Feed

https://github.com/MdRohit786/RaitMedia/blob/ba546b36e07271d8d71faa1950fffa12e58a5816/images/homePage.png

### Notifications

https://github.com/MdRohit786/RaitMedia/blob/ba546b36e07271d8d71faa1950fffa12e58a5816/images/notificationPage.png

### User Profile

https://github.com/MdRohit786/RaitMedia/blob/ba546b36e07271d8d71faa1950fffa12e58a5816/images/userProfile.png

## Project Status

The core social-media workflow is implemented, including authentication, profiles, social relationships, posts, interactions, notifications, media handling, and production serving.

Further improvements can include pagination, advanced search, additional moderation controls, and broader interaction features.

## License

This project is intended for learning, portfolio, and demonstration purposes.

---

**RaitMedia**
A full-stack social platform built with React, Node.js, Express, and MongoDB.
