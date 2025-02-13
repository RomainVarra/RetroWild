import type { RequestHandler } from "express";
import MovieRepository from "./MovieRepository";

const read: RequestHandler = async (req, res, next) => {
  try {
    const movieId = Number(req.params.id);

    const movies = await MovieRepository.read(movieId);

    if (movies == null) {
      res.sendStatus(404);
    } else {
      res.json(movies);
    }
  } catch (err) {
    next(err);
  }
};

const browse: RequestHandler = async (req, res, next) => {
  try {
    const movies = await MovieRepository.readAll();

    res.json(movies);
  } catch (err) {
    next(err);
  }
};

const addMovie: RequestHandler = async (req, res, next) => {
  try {
    const newMovie = {
      movie_title: req.body.movie_title,
      release_year: Number(req.body.release_year),
      director: req.body.director,
      genre: req.body.genre,
      duration: Number(req.body.duration),
      language: req.body.language,
      description: req.body.description,
      poster_url: req.body.poster_url,
      video_url: req.body.video_url,
      rating: Number(req.body.rating),
    };

    const insertId = await MovieRepository.create(newMovie);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroyMovie: RequestHandler = async (req, res, next) => {
  try {
    const movieId = Number(req.params.id);

    await MovieRepository.delete(movieId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { read, browse, addMovie, destroyMovie };
