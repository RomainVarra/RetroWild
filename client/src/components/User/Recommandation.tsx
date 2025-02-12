import { useForm } from "react-hook-form";
import type { recommandationType } from "../../types/user.type";
import style from "./recommandation.module.css";

type RecommandationFormType = {
  onSubmit: (data: recommandationType) => void;
};

function Recommandation({ onSubmit }: RecommandationFormType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<recommandationType>();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className={style.sectionRecommandation}>
        <label htmlFor="what" className={style.whatLabel}>
          Que souhaiteriez-vous ajouter à Retrowild ?
          <article className={style.whatInput}>
            <input
              {...register("what")}
              type="radio"
              name="what"
              id="what_article"
              value="article"
              className={style.whatArticle}
            />
            Un article
            <input
              {...register("what")}
              type="radio"
              name="what"
              id="what_movie"
              value="movie"
              className={style.whatMovie}
              defaultChecked
            />
            Un film
            {typeof errors.what?.message === "string" && (
              <span className={style.errorMessage}>{errors.what.message}</span>
            )}
          </article>
        </label>
        <label htmlFor="who" className={style.whoLabel}>
          Quel élément souhaiteriez-vous voir ajouter ? (nom de film, sujet d'un
          article, ...) :
          <article className={style.whoSection}>
            <input
              placeholder="Le dictateur de Charlie Chaplin"
              {...register("who", {
                required: "Le champ est requis",
                minLength: {
                  value: 2,
                  message:
                    "Votre recommandation doit au moins contenir 2 caractères",
                },
                maxLength: {
                  value: 50,
                  message:
                    "Votre recommandation ne peut pas contenir plus de 50 caractères",
                },
              })}
              type="text"
              id="who"
              className={style.whoInput}
            />
            {typeof errors.who?.message === "string" && (
              <span className={style.errorMessage}>{errors.who.message}</span>
            )}
          </article>
        </label>
        <label htmlFor="why" className={style.whyLabel}>
          Pouvez-vous justifiez-votre choix en quelques lignes ?
          <article className={style.whySection}>
            <textarea
              placeholder="C'est un classique du cinéma, visionnaire et révolutionnaire pour l'époque, ayant pleinement sa place sur ce beau site. J'aimerais que nous puissions le partager avec tous les RetroWilders !"
              {...register("why", {
                required: "Le champ est requis",
                minLength: {
                  value: 2,
                  message:
                    "Votre recommandation doit au moins contenir 2 caractères",
                },
                maxLength: {
                  value: 255,
                  message:
                    "Votre recommandation ne peut pas contenir plus de 255 caractères",
                },
              })}
              id="why"
              className={style.whyInput}
            />
            {typeof errors.why?.message === "string" && (
              <span className={style.errorMessage}>{errors.why.message}</span>
            )}
          </article>
        </label>
        <button type="submit" className={style.submitButton}>
          Soumettre
        </button>
      </section>
    </form>
  );
}

export default Recommandation;
