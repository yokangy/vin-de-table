const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

const Wines  = require('./controllers/wines_controller');

// DB setup
mongoose.connect('mongodb://localhost/vin')

// App setup
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json({ type: '*/*' }));
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../bin')));

// home route
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.get('/wines', Wines.getWines);

// Server setup
const port = process.env.PORT || 8080;
app.listen(port);
console.log('Server listening on ' + port);