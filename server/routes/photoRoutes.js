const mongoose = require('mongoose');

const Photo = mongoose.model('photos');

module.exports = (app) => {
  app.post('/api/photos', async (req, res) => {
    console.log(req);
    const { image } = req.body;

    const photo = new Photo({
      image,
      dataSent: Date.now(),
    });

    try {
      await photo.save();
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
