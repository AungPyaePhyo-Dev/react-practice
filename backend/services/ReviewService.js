const Reviews = require('../models/Review');
const mongoose = require('mongoose');

const getAllReviews = async() => {
    return Reviews.find().populate('movie');
}

const saveReview = async (review) => {
    const newReview = new Reviews({
        movie: new mongoose.Types.ObjectId(review.movie),
        rating: review.rating,
        review: review.review
    });
    await newReview.save();
    // return newReview;
    return newReview.populate('movie');
}

const getReviewByMovieId = async(movieId) => {
    return Reviews.find({movie:movieId}).populate('movie');
}

const updateReview = async (reviewId, review) => {
    review.movie = new mongoose.Types.ObjectId(review.movie);
    const updatedReview = await Reviews.findByIdAndUpdate(reviewId, review, {new: true});
    return updatedReview.populate('movie');
}

const deleteReviewById = async (id) => {
    let review = await Reviews.findById(id);
    if(!review){
        throw new Error('Review not found');
    }
    return Reviews.findByIdAndDelete(id);
}

module.exports = { getAllReviews, saveReview, getReviewByMovieId, updateReview, deleteReviewById };