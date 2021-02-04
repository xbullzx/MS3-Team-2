const mongoose = require('mongoose');


const commentsSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  text: {
    type: [String],
    required: true
  },
});

mongoose.model('Comment', commentsSchema);