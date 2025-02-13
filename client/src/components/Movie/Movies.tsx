import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { MovieType } from "../../types/movie.type";
import style from "./movies.module.css";

function Movies() {
  const [movie, setMovie] = useState<MovieType[]>([]);
  const navigate = useNavigate();
  const handleNewsArticleClick = (id: number) => navigate(`/streaming/${id}`);
  const OneKeyUp = () => {
    "Press here to read the article";
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/movies`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h3 className={style.newMovieTitle}>Nos films</h3>
      <section className={style.newMovieSection}>
        <article className={style.firstMovieSection}>
          {movie.map((m) => (
            <div className={style.cardMovie} key={m.id}>
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
    </>
  );
}

export default Movies;
