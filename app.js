'use strict'

const PORT = process.env.PORT || 8000;

var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/puppies', require('./routes/puppy'));

var server = http.createServer(app);

server.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});
