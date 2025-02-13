import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { MovieType } from "../../types/movie.type";
import style from "./adminMovieAdd.module.css";

type AdminFormMovieType = {
  onSubmit: (data: MovieType) => void;
};

function AdminMovieAdd({ onSubmit }: AdminFormMovieType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MovieType>();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <h1 className={style.formMovieTitle}>Ajouter un film</h1>
      <form className={style.movieForm} onSubmit={handleSubmit(onSubmit)}>
        <section className={style.movieFormSection}>
          <label htmlFor="movie_title" className={style.movieLabel}>
            Titre du film :
            <input
              placeholder="Metropolis"
              {...register("movie_title", {
                required: "Le champ est requis",
                minLength: {
                  value: 2,
                  message:
                    "Le titre du film doit au moins contenir 2 caractères",
                },
                maxLength: {
                  value: 100,
                  message:
                    "Le titre du film ne peut pas contenir plus de 100 caractères",
                },
              })}
              type="text"
              id="movie_title"
              className={style.titleInput}
            />
            {typeof errors.movie_title?.message === "string" && (
              <span className={style.errorMessage}>
                {errors.movie_title.message}
              </span>
            )}
          </label>

          <label htmlFor="release_year" className={style.releaseYearLabel}>
            Année de sortie du film :
            <input
              placeholder="1925"
              {...register("release_year", {
                pattern: {
                  value: /^(19[0-9]{2})$/,
                  message: "L'année doit être dans le 20e siècle",
                },
              })}
              type="text"
              id="release_year"
              className={style.releaseYearInput}
            />
            {typeof errors.release_year?.message === "string" && (
              <span className={style.errorMessage}>
                {errors.release_year.message}
              </span>
            )}
          </label>

          <label htmlFor="director" className={style.directorLabel}>
            Nom du réalisateur :
            <input
              placeholder="Quentin Tarantino"
              {...register("director", {
                required: "Le champ est requis",
                minLength: {
                  value: 6,
                  message:
                    "le nom du réalisateur doit au moins contenir 6 caractères",
                },
                maxLength: {
                  value: 50,
                  message:
                    "Le nom du réalisateur ne peut pas contenir plus de 50 caractères",
                },
              })}
              type="text"
              id="director"
              className={style.directorInput}
            />
            {typeof errors.director?.message === "string" && (
              <span className={style.errorMessage}>
                {errors.director.message}
              </span>
            )}
          </label>

          <label htmlFor="genre" className={style.genreLabel}>
            Catégorie :
            <input
              placeholder="Aventure"
              {...register("genre", {
                required: "Le champ est requis",
                minLength: {
                  value: 10,
                  message: "Le genre doit au moins contenir 10 caractères",
                },
                maxLength: {
                  value: 30,
                  message:
                    "Le genre ne peut pas contenir plus de 30 caractères",
                },
              })}
              type="text"
              id="genre"
              className={style.genreInput}
            />
            {typeof errors.genre?.message === "string" && (
              <span className={style.errorMessage}>{errors.genre.message}</span>
            )}
          </label>

          <label htmlFor="duration" className={style.durationLabel}>
            Durée du film (en min):
            <input
              placeholder="124"
              {...register("duration", {
                required: "Le champ est requis",
                minLength: {
                  value: 1,
                  message: "La durée doit être renseigné",
                },
                maxLength: {
                  value: 3,
                  message: "La durée du film ne peux pas exceder 999 min",
                },
              })}
              type="text"
              id="duration"
              className={style.durationInput}
            />
            {typeof errors.duration?.message === "string" && (
              <span className={style.errorMessage}>
                {errors.duration.message}
              </span>
            )}
          </label>

          <label htmlFor="language" className={style.languageLabel}>
            Langage :
            <input
              placeholder="Muet"
              {...register("language", {
                required: "Le champ est requis",
                minLength: {
                  value: 2,
                  message: "Le champs doit au moins contenir 2 caractères",
                },
                maxLength: {
                  value: 30,
                  message:
                    "Le champs ne peut pas contenir plus de 30 caractères",
                },
              })}
              id="language"
              className={style.languageInput}
            />
            {typeof errors.language?.message === "string" && (
              <span className={style.errorMessage}>
                {errors.language.message}
              </span>
            )}
          </label>

          <label htmlFor="description" className={style.descriptionLabel}>
            Synopsis :
            <textarea
              placeholder="Il était une fois ... "
              {...register("description", {
                required: "Le champ est requis",
                minLength: {
                  value: 10,
                  message: "Le synopsis doit au moins contenir 10 caractères",
                },
                maxLength: {
                  value: 500,
                  message:
                    "Le synopsis ne peut pas contenir plus de 500 caractères",
                },
              })}
              id="description"
              className={style.descriptionInput}
            />
            {typeof errors.description?.message === "string" && (
              <span className={style.errorMessage}>
                {errors.description.message}
              </span>
            )}
          </label>

          <label htmlFor="poster_url" className={style.posterUrlLabel}>
            Lien vers l'image du film:
            <input
              placeholder="https://intergalactiques.net/wp-content/uploads/2024/03/les-chasses-du-comte-zaroff-01.jpg"
              {...register("poster_url", {
                required: "Le champ est requis",
                minLength: {
                  value: 10,
                  message: "Le lien doit au moins contenir 10 caractères",
                },
                maxLength: {
                  value: 255,
                  message:
                    "Le lien ne peut pas contenir plus de 255 caractères",
                },
              })}
              id="poster_url"
              className={style.posterUrlInput}
            />
            {typeof errors.poster_url?.message === "string" && (
              <span className={style.errorMessage}>
                {errors.poster_url.message}
              </span>
            )}
          </label>

          <label htmlFor="video_url" className={style.videoUrlLabel}>
            Lien vers l'url du film:
            <input
              placeholder="https://www.youtube.com/watch?v=BBgghnQF6E4"
              {...register("video_url", {
                required: "Le champ est requis",
                minLength: {
                  value: 10,
                  message: "L'url' doit au moins contenir 10 caractères",
                },
                maxLength: {
                  value: 255,
                  message: "L'url' ne peut pas contenir plus de 255 caractères",
                },
              })}
              id="video_url"
              className={style.videoUrlInput}
            />
            {typeof errors.video_url?.message === "string" && (
              <span className={style.errorMessage}>
                {errors.video_url.message}
              </span>
            )}
          </label>

          <label htmlFor="rating" className={style.ratingLabel}>
            Note du film (/10) :
            <input
              placeholder="8.5"
              {...register("rating", {
                required: "Le champ est requis",
                pattern: {
                  value: /^(10(\.0)?|[1-9](\.\d)?)$/,
                  message:
                    "La note doit être entre 1 et 10 avec une seule décimale",
                },
              })}
              id="rating"
              className={style.ratingInput}
            />
            {typeof errors.rating?.message === "string" && (
              <span className={style.errorMessage}>
                {errors.rating.message}
              </span>
            )}
          </label>
        </section>
        <button type="submit" className={style.submitButton}>
          Ajouter l'article
        </button>
      </form>
      <button type="button" className={style.goBackBtn} onClick={handleGoBack}>
        Revenir à la page précédente
      </button>
    </section>
  );
}

export default AdminMovieAdd;
