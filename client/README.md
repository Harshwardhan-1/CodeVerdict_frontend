#  Code Verdict – Frontend

This is the frontend application of Code Verdict, a full-stack coding practice platform inspired by modern online judges.  
It provides a clean, responsive, and interactive interface for solving problems and tracking progress.

---

##  Features

- 🔐 User Authentication (Signup / Login)
- 📋 Problem Listing with Detailed View
- 💻 Code Editor Interface
- 📊 Heatmap Progress Tracking
- 🏆 Contest Participation UI
- 📱 Fully Responsive Design

---

## 🛠 Tech Stack

- React
- TypeScript
- Vite
- CSS
- Axios

---

##  Project Structure

```
client/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── assets/
│   └── App.tsx
│
├── public/
├── package.json
├── vite.config.ts
└── README.md
```

---

## ⚙️ Installation & Setup

### 1 Clone the Repository
git clone https://github.com/Harshwardhan-1/codeVerdict.git
cd codeVerdict

### 2 Install Dependencies

```
npm install
```

###  Run Development Server

```
cd client
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

##  Environment Variables

Create a `.env` file inside the `client` folder and add:

```
VITE_BACKEND_URL=your_backend_url
```

Replace the value with your backend server URL.

---

##  Production Build

To create a production build:

```
npm run build
```

To preview the production build:

```
npm run preview
```

---

##  Deployment

The frontend is optimized for deployment on platforms like:

- Vercel
- Netlify
- Any static hosting service

---

##  Notes

- Ensure backend server is running before starting the frontend.
- Make sure the backend URL is correctly configured in environment variables.

---

##  Author
Harshwardhan Yadav
Full Stac Devloper
Frontend developed as part of the Code Verdict full-stack project.