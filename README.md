````md
# 🚀 Resume Builder

A modern full-stack Resume Builder web application built using the MERN Stack. Users can create, customize, and manage professional resumes with authentication, Cloudinary image uploads, and responsive UI.

---

# 🌐 Live Demo

## Frontend
https://resume-builder-xi-one-39.vercel.app


---

# ✨ Features

- 🔐 User Authentication (Signup/Login)
- 🛡️ JWT-based Authorization
- 📄 Create & Manage Multiple Resumes
- 🖼️ Upload Profile & Thumbnail Images
- ☁️ Cloudinary Image Storage
- 📱 Fully Responsive UI
- 🎨 Resume Templates
- 🔒 Protected Routes
- ⚡ REST API Integration
- 💾 MongoDB Database Integration
- 🌍 Fully Deployed MERN Application

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Cloudinary

## Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas
- Image Hosting: Cloudinary

---

# 📂 Project Structure

```bash
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
````

---

# ⚙️ Environment Variables

## Backend `.env`

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

# 📦 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Gowtham5285/Resume-Builder.git
```

---

## 2️⃣ Backend Setup

```bash
cd Backend

npm install

npm run dev
```

Backend runs on:

```bash
http://localhost:8000
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend/resume-builder

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# ☁️ Cloudinary Setup

1. Create account on:
   [https://cloudinary.com](https://cloudinary.com)

2. Copy:

* Cloud Name
* API Key
* API Secret

3. Add them in backend `.env`

---

# 🌍 Deployment

## Frontend Deployment

Deployed using Vercel.

## Backend Deployment

Deployed using Render.

## Database

MongoDB Atlas.

---

# 🔐 Authentication Flow

* User Signup/Login
* JWT Token Generation
* Protected Backend Routes
* Token-based Authorization

---

# 📸 Image Upload Flow

* User uploads image
* Multer handles multipart/form-data
* Cloudinary stores image
* Image URL stored in MongoDB

---

# 🚀 Future Improvements

* Resume PDF Export
* More Resume Templates
* Drag & Drop Sections
* Dark Mode
* AI Resume Suggestions

---

# 👨‍💻 Author

## Valluri Gowtham Sai

### GitHub

[https://github.com/Gowtham5285](https://github.com/Gowtham5285)

### LinkedIn

[https://www.linkedin.com/in/gowtham-sai-valluri/](https://www.linkedin.com/in/gowtham-sai-valluri/)

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.

```
```
