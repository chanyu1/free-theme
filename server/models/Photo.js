const mongoose = require('mongoose');
const { Schema } = mongoose;

const photoSchema = new Schema({
  photoName: String,
});

mongoose.exports = photoSchema;
