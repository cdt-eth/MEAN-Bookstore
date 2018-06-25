var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Middleware to initialize bodyParser
app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res) {
  res.send('Please use /api/books or /api/genres');
});

// Show Genre
app.get('/api/genres', function(req, res) {
  Genre.getGenres(function(err, genres) {
    if (err) {
      throw err;
    }
    res.json(genres);
  });
});

// Add Genre
app.post('/api/genres', function(req, res) {
  var genre = req.body;
  Genre.addGenre(genre, function(err, genre) {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

// Show Books
app.get('/api/books', function(req, res) {
  Book.getBooks(function(err, books) {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

// Show Book By Id
app.get('/api/books/:_id', function(req, res) {
  Book.getBookById(req.params._id, function(err, book) {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

// Run App
app.listen(3000);
console.log('Running on Port 3-Stacks...');
