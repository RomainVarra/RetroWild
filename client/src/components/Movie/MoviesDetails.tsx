import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import type { MovieType } from "../../types/movie.type";
import style from "./newsMoviesDetails.module.css";

function MovieDetails() {
  const [movie, setMovie] = useState<MovieType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!movie) {
    return <h1>Aucun film trouvé</h1>;
  }
  return (
    <section className={style.movieSection}>
      <h2 className={style.movieTitle}>{movie?.movie_title}</h2>
      <article className={style.movieTechnicalInformation}>
        <div className={style.imgSection}>
          <img
            className={style.moviePicture}
            src={movie?.poster_url}
            alt={`Poster du film ${movie?.movie_title}`}
          />
        </div>
        <article className={style.technicalPaper}>
          <article className={style.movieRatingSection}>
            <span className={style.movieRating}>{movie?.rating}</span>
          </article>
          <article className={style.movieInformation}>
            <span className={style.directorSpan}>
              Réalisateur : {movie?.director}
            </span>
            <span className={style.yearSpan}>
              Année de sortie : {movie?.release_year}
            </span>
            <span className={style.durationSpan}>
              Durée : {movie.duration}min
            </span>
            <span>Genre : {movie.genre}</span>
            <span>Langue : {movie.language}</span>
          </article>
        </article>
        <article className={style.movieSynopsisSection}>
          <span className={style.movieSynopsisTitle}>Synopsis :</span>
          <p className={style.movieSynopsis}>{movie.description}</p>
        </article>
      </article>
      <p>Le regarder sans plus attendre : </p>
      <div className={style.player}>
        <ReactPlayer
          url={movie?.video_url}
          height="100%"
          width="80%"
          playing={false}
          controls
        />
      </div>
    </section>
  );
}

export default MovieDetails;
