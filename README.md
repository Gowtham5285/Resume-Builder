# 🚀 Resume Builder

> A modern full-stack Resume Builder web application built with the **MERN Stack**. Create, customize, and manage professional resumes with ease — featuring authentication, cloud image uploads, and a fully responsive UI.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://resume-builder-xi-one-39.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Gowtham5285-181717?style=for-the-badge&logo=github)](https://github.com/Gowtham5285/Resume-Builder)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Gowtham%20Sai-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/gowtham-sai-valluri/)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 Authentication | Secure Signup & Login system |
| 🛡️ JWT Authorization | Token-based protected routes |
| 📄 Resume Management | Create & manage multiple resumes |
| 🖼️ Image Uploads | Profile & thumbnail image support |
| ☁️ Cloud Storage | Cloudinary-powered image hosting |
| 📱 Responsive UI | Fully mobile-friendly design |
| 🎨 Templates | Multiple resume templates |
| ⚡ REST API | Clean backend API integration |
| 💾 Database | MongoDB Atlas integration |

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React.js-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white)

### Deployment
| Layer | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |
| Image Hosting | Cloudinary |

---

## 📂 Project Structure

```
Resume-Builder/
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   └── resume-builder/
│       ├── public/
│       ├── src/
│       ├── package.json
│       └── vite.config.js
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `Backend/` directory and add the following:

```env
PORT=8000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Gowtham5285/Resume-Builder.git
cd Resume-Builder
```

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
npm run dev
```

> Backend runs on: `http://localhost:8000`

### 3️⃣ Frontend Setup

```bash
cd frontend/resume-builder
npm install
npm run dev
```

> Frontend runs on: `http://localhost:5173`

---

## ☁️ Cloudinary Setup

1. Create a free account at [cloudinary.com](https://cloudinary.com)
2. From your dashboard, copy your:
   - **Cloud Name**
   - **API Key**
   - **API Secret**
3. Paste them into your `Backend/.env` file

---

## 🔐 Authentication Flow

```
User Signup / Login
      ↓
JWT Token Generated
      ↓
Token Stored Client-Side
      ↓
Protected Routes Verified via Token
```

---

## 📸 Image Upload Flow

```
User Selects Image
      ↓
Multer Handles multipart/form-data
      ↓
Image Uploaded to Cloudinary
      ↓
Cloudinary URL Saved in MongoDB
```

---

## 🚀 Future Improvements

- [ ] 📄 Resume PDF Export
- [ ] 🎨 More Resume Templates
- [ ] 🖱️ Drag & Drop Sections
- [ ] 🌙 Dark Mode
- [ ] 🤖 AI Resume Suggestions

---

## 👨‍💻 Author

**Valluri Gowtham Sai**

[![GitHub](https://img.shields.io/badge/GitHub-Gowtham5285-181717?style=for-the-badge&logo=github)](https://github.com/Gowtham5285)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Gowtham%20Sai-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/gowtham-sai-valluri/)

---

## ⭐ Support

If you found this project helpful, please consider giving it a **⭐ star** on [GitHub](https://github.com/Gowtham5285/Resume-Builder) — it means a lot!
