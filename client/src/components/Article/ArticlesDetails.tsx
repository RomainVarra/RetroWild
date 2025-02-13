import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { articleType } from "../../types/article.type";
import style from "./newsArticleDetails.module.css";

function ArticlesDetails() {
  const [article, setArticle] = useState<articleType | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!article) {
    return <h1>Article non trouvé</h1>;
  }

  return (
    <section className={style.articleSection}>
      <article className={style.articleStart}>
        <h2 className={style.articleTitle}>{article?.article_title}</h2>
        <span className={style.articleAuthor}>Auteur : {article?.author}</span>
        <span className={style.articlePublished}>
          Publié le : {article?.published_date}
        </span>
        <img
          className={style.articlePicture}
          src={article?.picture_article}
          alt={`Représentation de l'article ${article?.article_title}`}
        />
      </article>
      <h3 className={style.articleFirstSectionTitle}>
        {article?.first_title_section}
      </h3>
      <p className={style.articleFirstSection}>{article?.first_section}</p>
      <h3 className={style.articleSecondSectionTitle}>
        {article?.second_title_section}
      </h3>
      <p className={style.articleSecondSection}>{article?.second_section}</p>
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

export default ArticlesDetails;
