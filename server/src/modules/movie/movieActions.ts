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
    // Pass any errors to the error-handling middleware
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

export default { read, browse };
