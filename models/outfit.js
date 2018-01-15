const mongoose = require('mongoose');

const outfitSchema = new mongoose.Schema({
  item: [{ type: mongoose.Schema.ObjectId, ref: 'Item', required: true }]
});

module.exports = mongoose.model('Outfit', outfitSchema);
