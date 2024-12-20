var express = require('express');
var router = express.Router();
var movie = require('../controller/MovieController.js');


router.get('/', movie.getAllMovies); // 200
router.post('/', movie.saveMovie); // 201
router.put('/:id', movie.updateMovie);
router.get('/:id', movie.getMovieById);
router.get('/title/:title', movie.findMovieByTitle);
router.get('/year/:year', movie.findMovieByYear);
router.delete('/:id', movie.deleteMovie);

module.exports = router;