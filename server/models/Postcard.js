const PhotoSchema = require('./Photo');

const mongoose = require('mongoose');
const { Schema } = mongoose;

const postcardSchema = new Schema({
  photos: [PhotoSchema],
  theme: String,
  description: String,
  owner: String,
  ownerEmail: String,
  dateSent: Date,
});

mongoose.model('postcards', postcardSchema);
