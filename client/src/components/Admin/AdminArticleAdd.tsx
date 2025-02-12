import { useForm } from "react-hook-form";
import type { articleType } from "../../types/article.type";
import style from "./adminArticleAdd.module.css";

type AdminFormArticleType = {
  onSubmit: (data: articleType) => void;
};

function AdminArticleAdd({ onSubmit }: AdminFormArticleType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<articleType>();

  return (
    <section>
      <h1>Ajouter un article</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="article_title" className={style.titleLabel}>
          Titre de l'article :
          <input
            placeholder="La folle histoire de ..."
            {...register("article_title", {
              required: "Le champ est requis",
              minLength: {
                value: 2,
                message: "Votre titre doit au moins contenir 2 caractères",
              },
              maxLength: {
                value: 50,
                message:
                  "Votre titre ne peut pas contenir plus de 50 caractères",
              },
            })}
            type="text"
            id="article_title"
            className={style.titleInput}
          />
          {typeof errors.article_title?.message === "string" && (
            <span className={style.errorMessage}>
              {errors.article_title.message}
            </span>
          )}
        </label>

        <label htmlFor="published_date" className={style.publishedDateLabel}>
          Date de publication :
          <input
            placeholder="12 mars 1952"
            {...register("published_date", {
              required: "Le champ est requis",
              minLength: {
                value: 6,
                message: "la date doit au moins contenir 6 caractères",
              },
              maxLength: {
                value: 20,
                message: "La date ne peut pas contenir plus de 20 caractères",
              },
            })}
            type="text"
            id="published_date"
            className={style.publishedDateInput}
          />
          {typeof errors.published_date?.message === "string" && (
            <span className={style.errorMessage}>
              {errors.published_date.message}
            </span>
          )}
        </label>

        <label htmlFor="author" className={style.authorLabel}>
          Nom de l'auteur :
          <input
            placeholder="John Leganzano"
            {...register("author", {
              required: "Le champ est requis",
              minLength: {
                value: 6,
                message:
                  "le nom de l'auteur doit au moins contenir 6 caractères",
              },
              maxLength: {
                value: 30,
                message:
                  "Le nom de l'auteur ne peut pas contenir plus de 30 caractères",
              },
            })}
            type="text"
            id="author"
            className={style.authorInput}
          />
          {typeof errors.author?.message === "string" && (
            <span className={style.errorMessage}>{errors.author.message}</span>
          )}
        </label>

        <label htmlFor="picture_article" className={style.pictureArticleLabel}>
          Lien vers l'image :
          <input
            placeholder="https://www.google.fr/url?sa=i&url=https%3A%2F%2Fwww.cinematheque.fr%2Ffilm%2F47761.html&psig=AOvVaw1M0Zz8Y8i0ei7W1uULIr8N&ust=1739489000926000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDJ0dGjv4sDFQAAAAAdAAAAABAE"
            {...register("picture_article", {
              required: "Le champ est requis",
              minLength: {
                value: 10,
                message:
                  "Le lien vers l'image  doit au moins contenir 10 caractères",
              },
              maxLength: {
                value: 255,
                message:
                  "Le lien vers l'image ne peut pas contenir plus de 255 caractères",
              },
            })}
            type="text"
            id="picture_article"
            className={style.pictureArticleInput}
          />
          {typeof errors.picture_article?.message === "string" && (
            <span className={style.errorMessage}>
              {errors.picture_article.message}
            </span>
          )}
        </label>

        <label
          htmlFor="first_title_section"
          className={style.firstTitleSectionLabel}
        >
          Nom de la première section :
          <input
            placeholder="La légende de Mr.Jack"
            {...register("first_title_section", {
              required: "Le champ est requis",
              minLength: {
                value: 6,
                message:
                  "le titre de la première section doit au moins contenir 6 caractères",
              },
              maxLength: {
                value: 100,
                message:
                  "Le titre de la première section ne peut pas contenir plus de 30 caractères",
              },
            })}
            type="text"
            id="first_title_section"
            className={style.firstTitleSectionInput}
          />
          {typeof errors.first_title_section?.message === "string" && (
            <span className={style.errorMessage}>
              {errors.first_title_section.message}
            </span>
          )}
        </label>
        <button type="submit" className={style.submitButton}>
          Ajouter l'article
        </button>
      </form>
    </section>
  );
}

export default AdminArticleAdd;
