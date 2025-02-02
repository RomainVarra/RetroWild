import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type MovieType = {
  id: number;
  title: string;
  release_year: number;
  director: string;
  genre: string;
  duration: number;
  language: string;
  description: string;
  poster_url: string;
  video_url: string;
  imdb_rating: number;
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
}

export default new MovieRepository();
