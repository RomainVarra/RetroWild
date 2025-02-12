import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mainArticle from "../../data/MainArticle.json";
import type { articleType } from "../../types/article.type";
import style from "./newsArticles.module.css";

function NewsArticles() {
  const [firstArticle, setFirstArticle] = useState<articleType[]>([]);
  const navigate = useNavigate();
  const handleNewsArticleClick = (id: number) => navigate(`/newArticle/${id}`);
  const OneKeyUp = () => {
    "Press here to read the article";
  };

  useEffect(() => {
    setFirstArticle(mainArticle);
  }, []);

  return (
    <>
      <h3 className={style.newArticleTitle}>Les articles du moment</h3>
      <section className={style.newArticleSection}>
        <p>Notre selection d'articles pour vous.</p>
        <article className={style.firstArticleSection}>
          {firstArticle.map((f) => (
            <div className={style.cardArticle} key={f.id}>
              <img
                className={style.firstArticlePicture}
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
      <section className={style.articleLink}>
        <button className={style.linkToAllArticles} type="button">
          Retrouver tout nos articles
        </button>
      </section>
    </>
  );
}

export default NewsArticles;
