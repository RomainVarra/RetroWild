import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { articleType } from "../../types/article.type";
import style from "./articles.module.css";

function Articles() {
  const [article, setArticle] = useState<articleType[]>([]);
  const navigate = useNavigate();
  const handleNewsArticleClick = (id: number) => navigate(`/articles/${id}`);
  const OneKeyUp = () => {
    "Press here to read the article";
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/articles`)
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className={style.articleSection}>
      <h3 className={style.ArticleTitle}>Les articles</h3>

      <article className={style.firstArticleSection}>
        {article.map((f) => (
          <div className={style.cardArticle} key={f.id}>
            <img
              className={style.articlePicture}
              src={f.picture_article}
              alt={`représentation de l'article : ${f.article_title}`}
              onClick={() => handleNewsArticleClick(f.id)}
              onKeyUp={OneKeyUp}
            />
            <h4 className={style.firstArticleTitle}>{f.article_title}</h4>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Articles;
