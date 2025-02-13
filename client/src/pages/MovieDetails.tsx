import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import type { MovieType } from "../types/movie.type";
import style from "./movieDetails.module.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType | null>(null);
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${VITE_API_URL}/api/movie/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <h1>{movie?.movie_title}</h1>
      <img src={movie?.poster_url} alt={`Affiche de ${movie?.movie_title}`} />

      <p>Année de sortie: {movie?.release_year}</p>
      <p>Genre: {movie?.genre}</p>
      <div className={style.player}>
        <ReactPlayer
          url={movie?.video_url}
          height="100%"
          width="80%"
          playing={false}
          controls
        />
      </div>
      <p>{movie?.description}</p>
    </div>
  );
}

export default MovieDetails;
