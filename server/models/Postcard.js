const PhotoSchema = require('./Photo');

const mongoose = require('mongoose');
const { Schema } = mongoose;

const postcardSchema = new Schema({
  photos: [PhotoSchema],
  // _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
});

mongoose.model('postcards', postcardSchema);
