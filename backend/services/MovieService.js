const Movie = require('./../models/Movie');

async function getAllMovies() {
    let movie = Movie.find();
    return movie;
}

async function getMovieById(id) {
    let movie = Movie.findById(id);
    return movie;
}

const searchMovieByTitle = async(movieTitle) => {
    const movies = await Movie.find({
        title: {
            $regex: movieTitle
        }
    });
    return movies;
}

const searchMovieByYear = async(year) => {
    const movies = await Movie.find({
        year: year
    });
    return movies;
}

async function saveMovie(movie) {
    let newMovie = new Movie(movie);
    return newMovie.save();
}

async function updateMovie(id, movie){
    let existingMovie = await Movie.findById(id);
    if(!existingMovie) {
        throw new Error('Movie id' + id +' not found');
    }else {
        return Movie.findByIdAndUpdate(id, movie,{new: true}); // new true will return updated data
    }
}

async function deleteMovieById(id) {
    let existingMovie = await Movie.findById(id);
    if(!existingMovie) {
        throw new Error('Movie id' + id +' not found');
    }else {
        return Movie.findByIdAndDelete(id); // new true will return updated data
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    searchMovieByTitle,
    searchMovieByYear,
    saveMovie,
    updateMovie,
    deleteMovieById
}