import { useNavigate } from "react-router-dom";
import style from "./movieAdminPage.module.css";

function MovieAdminPage() {
  const navigate = useNavigate();
  const handleAddMovie = () => {
    navigate("/admin/account/movie/add");
  };
  const handleShowMovie = () => {
    navigate("/admin/account/movie/all");
  };
  const handleKeyUp = () => {
    "Press Enter";
  };
  return (
    <section className={style.adminMovieSection}>
      <h1 className={style.adminMovieTitle}>Articles</h1>
      <div className={style.adminMovieCard}>
        <article
          className={style.MovieAdd}
          onClick={handleAddMovie}
          onKeyUp={handleKeyUp}
        >
          Publier un film
        </article>
        <article
          className={style.MovieAll}
          onClick={handleShowMovie}
          onKeyUp={handleKeyUp}
        >
          Tous les films
        </article>
      </div>
    </section>
  );
}

export default MovieAdminPage;
