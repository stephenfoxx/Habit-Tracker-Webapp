# 🌱 Habit Tracker Web App

A full-stack **Habit Tracker Application** built with the **MERN stack
(MongoDB, Express, React, Node.js)**.\
It allows users to **create, track, and update daily habits** ---
helping build consistency and discipline over time.\
Includes **user authentication**, **dark mode**, and a **progress
analytics chart** for visual motivation.

------------------------------------------------------------------------

## 🚀 Features

✅ **User Authentication**\
- Secure sign-up and login using JWT.\
- Passwords encrypted using bcrypt.

✅ **Habit Management**\
- Add, edit, and delete habits.\
- Track completion daily with real-time updates.\
- Persistent data storage via MongoDB.

✅ **Progress Visualization**\
- Interactive progress charts built with Recharts.\
- Track weekly completion rates.

✅ **Dark / Light Mode**\
- Toggle between light and dark themes.

✅ **Responsive UI**\
- Mobile-friendly design using Tailwind CSS.

✅ **Backend API**\
- RESTful Node.js + Express API for user and habit management.\
- Connected to MongoDB Atlas for secure cloud storage.

------------------------------------------------------------------------

## 🧠 Tech Stack

  -----------------------------------------------------------------------
  Layer                    Technology
  ------------------------ ----------------------------------------------
  **Frontend**             React, React Router, Context API, Tailwind
                           CSS, Recharts

  **Backend**              Node.js, Express.js

  **Database**             MongoDB Atlas

  **Authentication**       JWT, bcrypt

  **Styling**              Tailwind CSS

  **Version Control**      Git + GitHub
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

``` bash
git clone https://github.com/yourusername/Habit-Tracker-WebApp.git
cd Habit-Tracker-WebApp
```

### 2️⃣ Setup the Backend

``` bash
cd backend
npm install
```



Start the backend:

``` bash
node server.js
```

Backend runs on → **http://localhost:5000**

------------------------------------------------------------------------

### 3️⃣ Setup the Frontend

``` bash
cd frontend
npm install
npm run dev
```

Frontend runs on → **http://localhost:3000**

------------------------------------------------------------------------

## 🔒 Environment Variables

    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=secret123
    PORT=5000

------------------------------------------------------------------------

## 📊 Screenshots

<img width="1920" height="1080" alt="Screenshot (35)" src="https://github.com/user-attachments/assets/3a55291f-bf0f-48fe-b126-bdf658d3c8b1" />
<img width="1920" height="1080" alt="Screenshot (33)" src="https://github.com/user-attachments/assets/7e4161d0-b8c3-4a31-87e2-52fc07bbf612" />
<img width="1920" height="1080" alt="Screenshot (34)" src="https://github.com/user-attachments/assets/413ccd13-fc02-4305-be4d-78b797fc1e5c" />


------------------------------------------------------------------------

## 🧩 Folder Structure

    Habit-Tracker-WebApp/
    ├── backend/
    │   ├── authMiddleware.js
    │   ├── authRoutes.js
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── server.js
    │   └── user.js
    │
    ├── frontend/
    │   ├── Components/
    │   ├── public
    │   ├── src
    │   ├── package-lock.json
    │   └── package.json
    │
    └── README.md

------------------------------------------------------------------------



------------------------------------------------------------------------

## 👨‍💻 Author

**Stephen Foxx**\
📫 \[stephen.o.ogwu@gmail.com]\
💻 Portfolio: [https://react-vite-deploy-liart.vercel.app/](#)\
🔗 LinkedIn: [www.linkedin.com/in/stephen-ogwu](#)

------------------------------------------------------------------------

## 📝 License

This project is open source under the **MIT License** --- free to use
and modify for personal or learning purposes.
