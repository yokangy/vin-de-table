const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Wines model
const winesSchema = new Schema({
  vintage: Number,
  winery: String,
  name: String,
  varietal: String,
  rating: Number,
  review: [ { type: Schema.Types.ObjectId, ref:'reviews' } ]
});

// Create the model class
const ModelClass = mongoose.model('wines', winesSchema);

// Export the model
module.exports = ModelClass;