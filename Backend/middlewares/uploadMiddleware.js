const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "resume-builder",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only .jpeg, .jpg and .png formats are allowed"
      ),
      false
    );
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;