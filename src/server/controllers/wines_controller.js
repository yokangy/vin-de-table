const Wine = require('../models/wine');

exports.getWines = function(req, res, next) {
  Wine.find(function(err, wines) {
    if(err) { return next(err); }

    // If wines found, return list of wines
    if(wines && wines.length > 0) {
      return res.send(wines);
    } else {
      return res.send({ error: 'No wines found.'});
    }
  })
}

exports.getWineByID = function(req, res, next) {
  const wineID = req.params.id;
  
  Wine.find({ _id: wineID}, function(err, wines) {
    if(err) { return next(err); }

    // If wines found, return list of wines
    if(wines && wines.length > 0) {
      return res.send(wines);
    } else {
      return res.send({ error: 'No wines found.'});
    }
  })
}

exports.addWine = function(req, res, next) {
  const vintage = req.body.vintage;
  const winery = req.body.winery;
  const name = req.body.name;
  const varietal = req.body.varietal;

  Wine.findOne({ vintage: vintage, winery: winery, name: name, varietal: varietal }, function(err, existingWine) {
    if (err) { return next(err) }

    if (existingWine) {
      return res.status(422).send({ error: 'Wine already exists' });
    }

    const wine = new Wine({
      vintage: vintage,
      winery: winery,
      name: name,
      varietal: varietal
    });

    wine.save(function(err, wine) {
      if (err) { return next(err) }

      res.status(201).json(wine);
    });
  });
}