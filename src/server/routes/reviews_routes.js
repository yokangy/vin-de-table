const express = require('express');
const reviewRouter = express.Router();
const Reviews = require('../controllers/reviews_controller');

module.exports = function(app) {
  reviewRouter.get('/wine/:id', Reviews.getWineReviews);
  reviewRouter.get('/user/:id');
  reviewRouter.get('/:id');
  reviewRouter.post('/', Reviews.addReview);

  app.use('/reviews', reviewRouter);
}