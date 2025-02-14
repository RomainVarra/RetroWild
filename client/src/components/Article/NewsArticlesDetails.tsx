import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainArticle from "../../data/MainArticle.json";
import type { articleType } from "../../types/article.type";
import style from "./newsArticleDetails.module.css";

function NewArticlesDetails() {
  const [firstArticle, setFirstArticle] = useState<articleType | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const article =
      MainArticle.find((article) => article.id === Number(id)) || null;
    setFirstArticle(article);
  }, [id]);

  if (!firstArticle) {
    return <h1>Article non trouvé</h1>;
  }

  return (
    <section className={style.articleSection}>
      <article className={style.articleStart}>
        <h2 className={style.articleTitle}>{firstArticle?.article_title}</h2>
        <span className={style.articleAuthor}>
          Auteur : {firstArticle?.author}
        </span>
        <span className={style.articlePublished}>
          Publié le : {firstArticle?.published_date}
        </span>
        <img
          className={style.articlePicture}
          src={firstArticle?.picture_article}
          alt={`Représentation de l'article ${firstArticle?.article_title}`}
        />
      </article>
      <h3 className={style.articleFirstSectionTitle}>
        {firstArticle?.first_title_section}
      </h3>
      <p className={style.articleFirstSection}>{firstArticle?.first_section}</p>
      <h3 className={style.articleSecondSectionTitle}>
        {firstArticle?.second_title_section}
      </h3>
      <p className={style.articleSecondSection}>
        {firstArticle?.second_section}
      </p>
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

export default NewArticlesDetails;
