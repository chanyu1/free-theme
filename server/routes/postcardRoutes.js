const { auth } = require('../middlewares/auth');
const { upload } = require('../middlewares/upload');

const mongoose = require('mongoose');
const Postcard = mongoose.model('postcards');

module.exports = (app) => {
  app.get('/api/postcards', async (req, res) => {
    const postcards = await Postcard.find().select();

    res.send(postcards);
  });

  app.post('/api/postcards/upload', auth, upload, (req, res) => {
    const postcard = new Postcard({
      photos: req.files.map((photo) => ({
        photoName: `./uploads/${photo.filename}`,
      })),
      theme: req.body.theme,
      description: req.body.description,
      owner: req.user.name,
      ownerEmail: req.user.email,
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
};
