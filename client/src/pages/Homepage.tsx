import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { MovieType } from "../types/movie.type";

function Homepage() {
  const [movie, setMovie] = useState<MovieType[]>([]);
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${VITE_API_URL}/api/movie`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <h1> retro Wild</h1>
      <div>
        {movie.map((m) => (
          <section key={m.id}>
            <h1>{m.title}</h1>
            <img src={m.poster_url} alt={`affiche de ${m.title}`} />
            <span>{m.release_year}</span>
            <span>{m.genre}</span>
            <button type="button" onClick={() => navigate(`/movie/${m.id}`)}>
              Lien vers le film
            </button>
          </section>
        ))}
      </div>
    </>
  );
}

export default Homepage;
