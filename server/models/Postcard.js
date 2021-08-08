const PhotoSchema = require('./Photo');

const mongoose = require('mongoose');
const { Schema } = mongoose;

const postcardSchema = new Schema({
  photos: [PhotoSchema],
  theme: String,
  description: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model('postcards', postcardSchema);
