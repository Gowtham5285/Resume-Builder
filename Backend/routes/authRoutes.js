const express = require("express");

const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/authController.js");

const {
  protect,
} = require("../middlewares/authMiddleware.js");

const upload = require("../middlewares/uploadMiddleware.js");

const router = express.Router();

// Register User with image upload
router.post(
  "/register",
  upload.single("profileImage"),
  registerUser
);

// Login User
router.post("/login", loginUser);

// Get User Profile
router.get(
  "/profile",
  protect,
  getUserProfile
);

// Upload Image
router.post(
  "/upload-image",
  upload.single("image"),
  (req, res) => {

    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    res.status(200).json({
      imageUrl: req.file.path,
    });
  }
);

module.exports = router;