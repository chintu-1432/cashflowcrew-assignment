deaspark
│
├── backend
│ ├── models
│ │ └── Idea.js
│ ├── routes
│ │ └── ideas.js
│ ├── server.js
│ └── package.json
│
├── frontend
│ ├── src
│ │ ├── components
│ │ │ └── IdeaCard.js
│ │ ├── pages
│ │ │ └── Home.js
│ │ ├── App.js
│ │ └── styles.css
│ └── package.json
│
└── README.md


---

## ⚙️ Installation

### 1 Clone Repository


git clonehttps://github.com/chintu-1432/cashflowcrew-assignment

cd ideaspark


---

### 2 Install Backend Dependencies


cd backend
npm install


---

### 3 Install Frontend Dependencies


cd ../frontend
npm install


---

## ▶️ Running the Project

### Start Backend


cd backend
npm start


Server will run on


https://cashflowcrew-assignment-eoxn.onrender.com/


---

### Start Frontend


cd frontend
npm start


Frontend runs on


https://cashflowcrew-assignment-wine.vercel.app/


---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| GET | /api/ideas | Get all ideas |
| POST | /api/ideas | Create idea |
| PATCH | /api/ideas/:id/upvote | Upvote idea |
| DELETE | /api/ideas/:id | Delete idea |

---

## 🗄️ Database

This project uses **MongoDB Atlas** as the cloud database.
---

## 📸 Screenshots

Example UI sections:

- Create Idea Form
- 
- Idea Cards Grid
- 
- Leaderboard
-login page

---

## 🚀 Deployment

Frontend can be deployed on:

- Vercel
- Netlify

Backend can be deployed on:

- Render
- Railway

Database hosted on:

- MongoDB Atlas

---

## 📌 Future Improvements

- User authentication (JWT)
- Comments on ideas
- Edit idea feature
- Real-time voting updates
- User profiles

---

## 👨‍💻 Author

Developed by **Mallaiah Chowdary**
