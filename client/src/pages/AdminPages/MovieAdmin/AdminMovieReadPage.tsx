import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { MovieType } from "../../../types/movie.type";
import style from "./adminMovieRead.module.css";

function AdminMovieReadPage() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/admin/account/movie");
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/admin/account/movie`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data: MovieType[]) => {
        setMovies(data);
      });
  }, []);

  const handleDeleteArticle = async (movieId: number) => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/api/admin/account/movie/${movieId}`;

    const response = await fetch(apiUrl, {
      method: "DELETE",
      credentials: "include",
    });

    if (response.ok) {
      navigate("/admin/account/movie");
    }
  };
  return (
    <section className={style.sectionMovieAdmin}>
      <h1 className={style.titleMovieAdmin}>Liste des articles</h1>
      <table className={style.movieTable}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Titre du film</th>
            <th>Réalisateur</th>
            <th>Année de sortie</th>
            <th>Durée</th>
            <th>Synopsis</th>
            <th>Image du film</th>
            <th>Genre</th>
            <th>Langue</th>
            <th>Note</th>
            <th>Lien vidéo</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.movie_title}</td>
              <td>{a.director}</td>
              <td>{a.release_year}</td>
              <td>{a.duration}</td>
              <td>{a.description}</td>
              <td>{a.poster_url}</td>
              <td>{a.genre}</td>
              <td>{a.language}</td>
              <td>{a.rating}</td>
              <td>{a.video_url}</td>
              <td>
                <button
                  type="button"
                  className={style.deleteButton}
                  onClick={() => handleDeleteArticle(a.id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        onClick={handleGoBack}
        className={style.buttonGoBack}
      >
        Revenir aux articles
      </button>
    </section>
  );
}

export default AdminMovieReadPage;
