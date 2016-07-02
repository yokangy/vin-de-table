const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
  rating: Number,
  review: String,
  wine: { type: Schema.Types.ObjectId, ref: 'wines' }
  user: { type: Schema.Types.ObjectId, ref: 'users' }
});

const ModelClass = mongoose.model('reviews', reviewsSchema);

module.exports = ModelClass;