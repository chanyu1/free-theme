const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../client', 'public', 'uploads'));
  },
  filename: (req, file, cb) => {
    // cb(null, `${Date.now()}_${file.originalname}`);
    cb(null, file.filename);
  },
});

const upload = multer({ storage }).array('image', 12);

module.exports = { upload };
