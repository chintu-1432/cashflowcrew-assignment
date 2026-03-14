# IdeaSpark 💡

IdeaSpark is a full-stack web application where users can create, share, and vote on innovative ideas. The platform allows users to submit ideas, upvote them, and view trending ideas through a leaderboard.

This project demonstrates a complete full-stack architecture using React for the frontend, Node.js with Express for the backend, and MongoDB Atlas for the database.

--------------------------------------------------

FEATURES

• User Signup  
• User Login  
• Create New Ideas  
• View Ideas From Other Users  
• Upvote Ideas  
• Delete Ideas  
• Update Ideas  
• Leaderboard Showing Top Ideas  
• Responsive User Interface  
• Full CRUD Operations  

--------------------------------------------------

TECH STACK

Frontend
React  
Axios  
CSS  

Backend
Node.js  
Express.js  

Database
MongoDB Atlas  

Deployment
Vercel (Frontend)  
Render (Backend)

--------------------------------------------------

PROJECT STRUCTURE

ideaspark

backend
│ server.js
│ package.json
│ models

frontend
│ src
│ │ components
│ │ pages
│ │ App.js
│ │ styles.css
│ public
│ package.json

README.md

--------------------------------------------------

INSTALLATION

Clone the repository

git clone https://github.com/chintu-1432/cashflowcrew-assignment

cd ideaspark

--------------------------------------------------

INSTALL BACKEND DEPENDENCIES

cd backend

npm install

--------------------------------------------------

INSTALL FRONTEND DEPENDENCIES

cd frontend

npm install

--------------------------------------------------

RUN THE PROJECT

Start Backend

cd backend

npm start

Backend runs on

https://cashflowcrew-assignment-eoxn.onrender.com/

--------------------------------------------------

Start Frontend

cd frontend

npm start

Frontend runs on

https://cashflowcrew-assignment-smoky.vercel.app/

--------------------------------------------------

API ENDPOINTS

Authentication

POST /api/signup  
Create new user account

POST /api/login  
Login user

--------------------------------------------------

Ideas

GET /api/ideas  
Get all ideas

POST /api/ideas  
Create new idea

PUT /api/ideas/:id  
Update idea

DELETE /api/ideas/:id  
Delete idea

PATCH /api/ideas/:id/upvote  
Upvote idea

GET /api/leaderboard  
Get top ideas

--------------------------------------------------

DATABASE

The application uses MongoDB Atlas as a cloud database.
--------------------------------------------------

DEPLOYMENT

Frontend deployed on Vercel

Backend deployed on Render

Database hosted on MongoDB Atlas

Application Architecture

User Browser
      ↓
Frontend (Vercel)
      ↓
Backend API (Render)
      ↓
MongoDB Atlas Database

--------------------------------------------------

FUTURE IMPROVEMENTS

JWT Authentication  
Password Hashing with bcrypt  
Comments on Ideas  
User Profiles  
Real-time Voting  
Idea Categories

--------------------------------------------------

AUTHOR

Developed by

Mallaiah Chowdary
