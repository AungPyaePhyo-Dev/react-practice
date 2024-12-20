var express = require('express');
const reviews = require('../controller/ReviewController');
var router = express.Router();

router.get('/', reviews.getAllReviews);
router.post('/', reviews.saveReview);
router.put('/:id', reviews.updateReview);
router.get('/movies/:movieId', reviews.getReviewByMovieId);
router.delete('/:id', reviews.deleteReview);
module.exports = router;