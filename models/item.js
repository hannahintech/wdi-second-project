const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  category: { type: String, required: true },
  colour: { type: Array, required: true },
  pattern: { type: String, required: true },
  weather: { type: Array, required: true },
  image: { type: String, required: true},
  specialOccassion: Boolean,
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

// itemSchema.methods.belongsTo = function itemBelongsTo(user) {
//   return this.createdBy.id === user.id;
// };

module.exports = mongoose.model('Item', itemSchema);
