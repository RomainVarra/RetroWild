import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type MovieType = {
  id: number;
  movie_title: string;
  release_year: number;
  director: string;
  genre: string;
  duration: number;
  language: string;
  description: string;
  poster_url: string;
  video_url: string;
  rating: number;
};

class MovieRepository {
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
      select * from movies
    where id = ? `,
      [id],
    );

    return rows[0] as MovieType;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from movies");
    return rows as MovieType[];
  }

  async create(movie: Omit<MovieType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO movies (movie_title, director, genre, language, duration, description, poster_url, video_url, rating, release_year) VALUES (?, ?, ?, ?, ?, ?, ?, ? , ?, ? )",
      [
        movie.movie_title,
        movie.director,
        movie.genre,
        movie.language,
        movie.duration,
        movie.description,
        movie.poster_url,
        movie.video_url,
        movie.rating,
        movie.release_year,
      ],
    );
    return result.insertId;
  }
}

export default new MovieRepository();
