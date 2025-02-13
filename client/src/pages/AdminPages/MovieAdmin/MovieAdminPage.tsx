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
  const handleGoBack = () => {
    navigate("/admin/account");
  };
  return (
    <section className={style.adminMovieSection}>
      <h1 className={style.adminMovieTitle}>Films</h1>
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
      <button className={style.goBackBtn} type="button" onClick={handleGoBack}>
        Revenir en arrière
      </button>
    </section>
  );
}

export default MovieAdminPage;
