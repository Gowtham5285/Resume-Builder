require("dotenv").config()
const express=require("express")
const cors=require("cors")
const path=require("path")
const app=express()
const connectDB=require("./config/db.js")
const authRoutes=require("./routes/authRoutes.js")
const resumeRoutes=require("./routes/resumeRoutes.js")

// Middleware to handle CORS
app.use(cors({
    origin:process.env.CLIENT_URL || "*",
    methods:["GET","PUT","DELETE","POST"],
    allowedHeaders:["Content-Type","Authorization"]
}))

// Connect to the Database
connectDB()

// Middleware
app.use(express.json())

// Routes
app.use("/api/auth",authRoutes);
app.use("/api/resume",resumeRoutes);

// Serve uploads folder
app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"), {
        setHeaders: (res, path) => {
            res.set("Access-Control-Allow-Origin", "http://localhost:5173");
        },
    })
);

// Start server
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})