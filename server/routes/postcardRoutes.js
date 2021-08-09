const path = require('path');
const multer = require('multer');

const mongoose = require('mongoose');
const Postcard = mongoose.model('postcards');

module.exports = (app) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../uploads/'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  });
  const upload = multer({ storage }).array('image', 12);

  app.get('/api/postcards', async (req, res) => {
    const postcards = await Postcard.find().select();

    res.send(postcards);
  });

  app.post('/api/postcards/upload', (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        return res.json({ success: false, err });
      }

      const postcard = new Postcard({
        photos: req.files.map((photo) => ({
          photoName: photo.filename,
          photoPath: photo.path,
        })),
        dateSent: Date.now(),
      });

      postcard.save((err, postcardInfo) => {
        if (err) {
          return res.json({ success: false, err });
        }
        return res
          .status(200)
          .json({ success: true, message: 'Failed to upload.' });
      });
    });
  });
};
