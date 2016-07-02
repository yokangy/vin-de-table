const express = require('express');
const reviewRouter = express.Router();

module.exports = function(app) {
  reviewRouter.get('/wine/:id');
  reviewRouter.get('/user/:id');
  reviewRouter.get('/:id');
  reviewRouter.post('/');

  app.use('/reviews', reviewRouter);
}