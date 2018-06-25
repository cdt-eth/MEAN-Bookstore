var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(3000);
console.log('Running on Port 3-Stacks...');
