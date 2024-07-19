const express = require('express');
const router = express.Router();
const { getMovies, getIdMovies } = require("../controller/movies.controller");

router.get("/", getMovies);

router.get("/:id", getIdMovies);

module.exports = router;