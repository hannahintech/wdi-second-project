const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  category: { type: Array, required: true },
  colour: { type: Array, required: true },
  pattern: { type: Array, required: true },
  weatherUse: { type: Array, required: true },
  image: { type: String, required: true},
  specialOccassion: Boolean
});

module.exports = mongoose.model('Item', itemSchema);
