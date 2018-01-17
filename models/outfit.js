const mongoose = require('mongoose');
// const Item = require('../controllers/item');

const outfitSchema = new mongoose.Schema({
  name: String,
  weather: Array,
  specialOccassion: Boolean,
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  items: [{ type: mongoose.Schema.ObjectId, ref: 'Item', required: true }]
});

module.exports = mongoose.model('Outfit', outfitSchema);

// <p><%= outfit.items[] %></p>
