const express = require('express')
const router = express.Router();
const moviesController = require('../controller/movies');

router.get("/:id", moviesController.getMovieById);

module.exports = router;