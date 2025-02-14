import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import LastMovies from "../../data/LastMovies.json";
import type { MovieType } from "../../types/movie.type";
import style from "./newsMoviesDetails.module.css";

function NewMovieDetails() {
  const [newMovie, setNewMovie] = useState<MovieType | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const movie = LastMovies.find((movie) => movie.id === Number(id)) || null;
    setNewMovie(movie);
  }, [id]);

  if (!newMovie) {
    return <h1>Film non trouvé</h1>;
  }

  return (
    <section className={style.movieSection}>
      <h2 className={style.movieTitle}>{newMovie.movie_title}</h2>
      <article className={style.movieTechnicalInformation}>
        <div className={style.imgSection}>
          <img
            className={style.moviePicture}
            src={newMovie.poster_url}
            alt={`Poster du film ${newMovie.movie_title}`}
          />
        </div>
        <article className={style.technicalPaper}>
          <article className={style.movieRatingSection}>
            <span className={style.movieRating}>{newMovie.rating}</span>
          </article>
          <article className={style.movieInformation}>
            <span className={style.directorSpan}>
              Réalisateur : {newMovie.director}
            </span>
            <span className={style.yearSpan}>
              Année de sortie : {newMovie.release_year}
            </span>
            <span className={style.durationSpan}>
              Durée : {newMovie.duration}min
            </span>
            <span>Genre : {newMovie.genre}</span>
            <span>Langue : {newMovie.language}</span>
          </article>
        </article>
        <article className={style.movieSynopsisSection}>
          <span className={style.movieSynopsisTitle}>Synopsis :</span>
          <p className={style.movieSynopsis}>{newMovie.description}</p>
        </article>
      </article>
      <p>Le regarder sans plus attendre : </p>
      <div className={style.player}>
        <ReactPlayer
          url={newMovie?.video_url}
          height="100%"
          width="80%"
          playing={false}
          controls
        />
      </div>

      <button
        className={style.goBackButton}
        type="button"
        onClick={() => navigate(-1)}
      >
        Revenir à l'accueil
      </button>
    </section>
  );
}

export default NewMovieDetails;
