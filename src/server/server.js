const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 8080;

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

// home route
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(port);
console.log('Server listening on ' + port);