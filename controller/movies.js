const fetch = require("node-fetch")

class Movies {
    async getMovieById(req, res) {
        try {
            const movie = await fetch(
                `https://api.themoviedb.org/3/search/movie/${req.params.id}?api_key=${process.env.TMDB_KEY}`
            );
            const movieJSON = await movie.json();
            res.json(movieJSON);
        } catch (error) {
            console.error(error);
            res.status(500).send("Error obtaining result");
        }
    }

    async getMovieRating(req, res) {
        try {
            const movie = await fetch(
                `https://api.themoviedb.org/3/search/movie/${req.params.id}?api_key=${process.env.TMDB_KEY}`
            );
            const movieJSON = await movie.json();
            res.json({ rating: movieJSON.vote_average });
        } catch (error) {
            console.error(error);
            res.status(404).send("NA");
        }
    }

    async postRating(req, res) {
        let { token, rating } = req.body;
        try {
            const
        }

    }
}

const moviesController = new Movies();
module.exports = moviesController;