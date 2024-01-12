const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const path = require("path");
// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
    // cb(null, path.join(__dirname, "../tmp"));
  },
  filename: (req, file, cb) => {
    const videoId = uuidv4();
    cb(null, `${videoId}-${file.originalname}`);
  },
});

module.exports = multer({ storage });
