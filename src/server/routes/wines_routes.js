const express = require('express');
const wineRouter = express.Router();
const Wines  = require('../controllers/wines_controller');

module.exports = function(app) {
  wineRouter.get('/', Wines.getWines);
  wineRouter.post('/', Wines.addWine);

  app.use('/wines', wineRouter);
}