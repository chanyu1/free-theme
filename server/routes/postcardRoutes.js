const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);

const { auth } = require('../middlewares/auth');
const { upload } = require('../middlewares/upload');
const { uploadFile, DownloadFile } = require('../middlewares/s3');

const mongoose = require('mongoose');
const Postcard = mongoose.model('postcards');

module.exports = (app) => {
  app.get('/api/postcards', async (req, res) => {
    const postcards = await Postcard.find().select();

    return res.send(postcards);
  });

  app.post('/api/postcards/upload', auth, upload, async (req, res) => {
    const files = req.files;

    for (let i = 0; i < files.length; i++) {
      await uploadFile(files[i]);
      await unlinkFile(files[i].path);
    }

    const postcard = new Postcard({
      photos: req.files.map((photo) => ({
        photoName: photo.filename,
      })),
      theme: req.body.theme,
      description: req.body.description,
      owner: req.user.name,
      ownerEmail: req.user.email,
      dateSent: Date.now(),
    });

    postcard.save((err, postcardInfo) => {
      if (err) return res.send({ success: false, err });

      return res.status(200).send({ success: true });
    });
  });

  app.get('/api/postcards/:key', (req, res) => {
    const key = req.params.key;
    const readStream = DownloadFile(key);

    readStream.pipe(res);
  });
};
