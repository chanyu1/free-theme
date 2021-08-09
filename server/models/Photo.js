const mongoose = require('mongoose');
const { Schema } = mongoose;

const photoSchema = new Schema({
  photoName: String,
  photoPath: String,
});

mongoose.exports = photoSchema;
