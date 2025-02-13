import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LastMovies from "../../data/LastMovies.json";
import type { MovieType } from "../../types/movie.type";
import style from "./newsMovies.module.css";

function NewsMovies() {
  const [newMovie, setNewMovie] = useState<MovieType[]>([]);
  const navigate = useNavigate();
  const handleNewsArticleClick = (id: number) => navigate(`/newMovie/${id}`);
  const OneKeyUp = () => {
    "Press here to read the article";
  };

  useEffect(() => {
    setNewMovie(LastMovies);
  }, []);

  return (
    <>
      <h3 className={style.newMovieTitle}>Nos nouveaux films</h3>
      <section className={style.newMovieSection}>
        <p>Les derniers ajout à notre catalogue.</p>
        <article className={style.firstMovieSection}>
          {newMovie.map((m) => (
            <div className={style.cardAMovie} key={m.id}>
              <img
                className={style.firstMoviePicture}
                src={m.poster_url}
                alt={`représentation du film : ${m.movie_title}`}
                onClick={() => handleNewsArticleClick(m.id)}
                onKeyUp={OneKeyUp}
              />
              <h4 className={style.firstMovieTitle}>{m.movie_title}</h4>
            </div>
          ))}
        </article>
      </section>
      <section className={style.movieLink}>
        <button className={style.linkToAllMovies} type="button">
          Retrouver tout nos films
        </button>
      </section>
    </>
  );
}

export default NewsMovies;
