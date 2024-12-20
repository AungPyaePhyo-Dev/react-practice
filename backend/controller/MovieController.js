const movieService = require('./../services/MovieService');

async function getAllMovies(req,res,next){
    console.log('Login user', req.user);
    let movies = await movieService.getAllMovies();
    res.status(200).json(movies);
}

async function saveMovie(req,res,next){
    try {
        let movie = await movieService.saveMovie(req.body);
        res.status(201).json(req.body);
    }catch(err){
        res.status(400).json({
            errorMessage: err.message
        });
    }
}

async function updateMovie(req,res,next) {
    try {
        let id = req.params.id;
        let updatedMovie = await movieService.updateMovie(id, req.body);
        res.status(201).json(updatedMovie);
    }catch(err){
        res.status(400).json({errorMessage: err.toString()});
    }

}

async function getMovieById(req,res,next) {
    let id = req.params.id;
    try {
        let movie = await movieService.getMovieById(id);
        res.json(movie);
    }catch(err){
        res.status(404).json({error: "Id " + id + " not found"});
    }
}

const findMovieByTitle = async (req,res,next) => {
    try{
        let title = req.params.title;
        let movies = await movieService.searchMovieByTitle(title);
        res.status(200).json(movies);
    }catch(err){
        res.status(404).json({error: "Id  not found"});
    }
}

const findMovieByYear = async (req,res,next) => {
    try{
        let year = req.params.year;
        let movies = await movieService.searchMovieByYear(year);
        res.status(200).json(movies);
    }catch(err){
        res.status(404).json({error: "Id  not found"});
    }
}

async function deleteMovie(req,res,next) {
    try {
        let id = req.params.id;
        let deletedMovie = await movieService.deleteMovieById(id);
        res.status(201).json(deletedMovie);
    }catch(err){
        res.status(400).json({errorMessage: err.toString()});
    }

}

module.exports = {
    getAllMovies,
    saveMovie,
    updateMovie,
    getMovieById,
    findMovieByTitle,
    findMovieByYear,
    deleteMovie
};