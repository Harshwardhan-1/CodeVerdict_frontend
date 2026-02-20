##  Screenshots

### Profile Page
![Profile Page](assets/profilePage.png)

### Sign Up Page
![Sign Up](assets/signup.png)

### Login Page
![Login](assets/login.png)

### Home Page
![Home](assets/image.png)

### HeatMap Page
![HeatMap](assets/heatmap.png)

### Discuss Approach
![Discuss](assets/discussApproach.png)

### See Problem
![Problem](assets/see1Problem.png)

### Problem List
![Problem List](assets/SeeProblem.png)


---

## 📖 Project Overview

Code Verdict replicates the core workflow of an online coding judge.  
Users can browse problems, write solutions, test their code, and participate in structured contests.  
The system is built with scalability and clean architecture in mind.


---

## ✨ Core Features

- Structured problem listing with detailed views  
- Contest participation system  
- Secure authentication and session handling  
- Admin dashboard for managing questions and contests  
- REST-based backend architecture  
- Fully responsive UI  


---

## 🛠 Technology Stack

### Frontend
- React  
- TypeScript  
- CSS  

### Backend
- Node.js  
- Express.js  
- MongoDB  

### Additional Tools
- JWT Authentication  
- REST APIs  
- Vercel Deployment  


---

## 📂 Project Structure
```
code-verdict/
│
├── client/
├── server/
├── assets/
│   ├── screenshots/
│   └── media/
└── README.md
```

---

## ⚙️ Installation & Setup

### 1 Clone the Repository

```
git clone https://github.com/JayRathore10/leetcode-clone.git
cd leetcode-clone
```

### 2️ Install Dependencies

Frontend:

```
cd client
npm install
```

Backend:

```
cd server
npm install
```

### 3️ Configure Environment Variables

Create a `.env` file inside the `server` directory and add:

```
PORT=5000
MONGO_URL=your_database_connection_string
COOKIE_SECRET=your_cookie_secret
JWT_SECRET=your_jwt_secret
FRONTEND=your_frontend_url
VITE_BACKEND_URL=your_backend_url
```

Modify values according to your environment configuration.

### 4️ Run the Application

Start backend:

```
cd server
npm run dev
```

Start frontend:

```
cd client
npm start
```

---




## 🚀 Deployment

- Frontend deployed on Vercel  
- Backend can be deployed on Render or Railway  


---

## 🔮 Planned Enhancements

- Leaderboard system  
- Submission history  
- Advanced filtering  
- Performance analytics dashboard  
- Discussion section  


---

## 🤝 Contribution

Contributions are welcome:

1. Fork the repository  
2. Create a feature branch  
3. Commit your changes  
4. Open a pull request  


---

## 📄 License

This project is open-source and intended for learning and development purposes.