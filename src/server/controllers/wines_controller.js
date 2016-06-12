const Wines = require('../models/wines');

exports.getWines = function(req, res, next) {
  Wines.find(function(err, wines) {
    if(err) { return next(err); }

    // If wines found, return list of wines
    if(wines && wines.length > 0) {
      return res.send(wines);
    } else {
      return res.send({ error: 'No wines found.'});
    }
  })
}