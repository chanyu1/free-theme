// const _ = require('lodash');
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

  app.post('/api/postcard/upload', (req, res) => {
    upload(req, res, (err) => {
      // const {} = req.files;
      // console.log(req.files);

      if (err) {
        return res.json({ success: false, err });
      }
      return res.json({
        success: true,
        filePath: req.files[0].path,
        fileName: req.files[0].filename,
      });
    });
    // try {
    //   res.send(req.file);
    // } catch (err) {
    //   res.send(400);
    // }
  });

  // app.post('/api/photos', async (req, res) => {
  //   const { image } = req.body;

  // const photo = new Photo({
  //   image,
  //   dataSent: Date.now(),
  // });

  // try {
  //   await photo.save();
  // } catch (err) {
  //   res.status(422).send(err);
  // }
};
