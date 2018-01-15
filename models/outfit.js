const mongoose = require('mongoose');

const outfitSchema = new mongoose.Schema({
  items: [{ type: mongoose.Schema.ObjectId, ref: 'Item', required: true }]
});

module.exports = mongoose.model('Outfit', outfitSchema);
