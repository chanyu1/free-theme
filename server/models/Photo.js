const mongoose = require('mongoose');
const { Schema } = mongoose;

const photoSchema = new Schema({
  image: String,
  theme: String,
  description: String,
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model('photos', photoSchema);
