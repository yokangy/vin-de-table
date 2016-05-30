const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 8080;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json({ type: '*/*' }));
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../bin')));

// home route
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(port);
console.log('Server listening on ' + port);