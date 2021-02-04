const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true
  },
  text: {
    type: [String],
  },
});

mongoose.model('List', listSchema);
