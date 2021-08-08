const mongoose = require('mongoose');
const { Schema } = mongoose;

const photoSchema = new Schema({
  photo: String,
});

mongoose.exports = photoSchema;
