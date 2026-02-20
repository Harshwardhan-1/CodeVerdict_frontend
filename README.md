##  Screenshots

### Profile Page
![Profile Page](assets/profilePage.png)

### Sign Up Page
![Sign Up](assets/login.png)


### Login Page
![login](assets/login.png)


### Home Page
![Home](assets/image.png)

### HeatMap Page
![Heat](assets/heatmap.png)


### Discuss Approach
![Discuss](assets/discussApproach.png)

### See Problem
![problem](assets/see1Problem.png)

### Problem List
![Problem](assets/SeeProblem.png)














Project Overview

Code Verdict simulates the essential workflow of an online coding judge. Users can explore coding problems, write and test solutions, and participate in structured contests. The system is developed with scalability, modular architecture, and maintainability as key design principles.

✨ Core Features

Organized problem listing with detailed descriptions

Contest participation system

Secure user authentication and session handling

Admin dashboard for managing questions and contests

REST-based backend architecture

Clean and responsive UI design

🛠 Technology Stack
Frontend

React

TypeScript

CSS

Backend

Node.js

Express.js

MongoDB

Additional Tools

JWT Authentication

REST APIs

Vercel (Frontend Deployment)

📂 Project Structure
code-verdict/
│
├── client/                
├── server/                
├── assets/
│   ├── screenshots/
│   └── media/
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/code-verdict.git
cd code-verdict
2️⃣ Install Dependencies

Frontend:

cd client
npm install

Backend:

cd server
npm install
3️⃣ Environment Configuration

Create a .env file inside the server directory and configure:

PORT=5000
MONGO_URI=your_database_connection_string
JWT_SECRET=your_jwt_secret
COOKIE_SECRET=your_cookie_secret
SALT_ROUNDS=your_hashing_salt_round
FRONTEND_URL=your_frontend_url

Adjust values according to your setup.

4️⃣ Run the Application

Start backend:

cd server
npm run dev

Start frontend:

cd client
npm start
🚀 Deployment

Frontend hosted on Vercel

Backend can be deployed on Render, Railway, or any Node.js hosting service

🔮 Planned Enhancements

Leaderboard integration

Submission history tracking

Advanced filtering by difficulty and topic

Performance analytics dashboard

Discussion section for problems

🤝 Contribution Guidelines

Contributions are welcome:

Fork the repository

Create a new branch

Implement your feature or fix

Submit a pull request with a clear explanation

📄 License

This project is open-source and available for educational and development purposes.