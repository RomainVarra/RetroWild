import { useNavigate } from "react-router-dom";
import style from "./articleAdminPage.module.css";

function ArticleAdminPage() {
  const navigate = useNavigate();
  const handleAddArticle = () => {
    navigate("/admin/account/article/add");
  };
  const handleShowArticle = () => {
    navigate("/admin/account/article/all");
  };
  const handleKeyUp = () => {
    "Press Enter";
  };

  const handleGoBack = () => {
    navigate("/admin/account");
  };

  return (
    <section className={style.adminArticleSection}>
      <h1 className={style.adminArticleTitle}>Articles</h1>
      <div className={style.adminArticleCard}>
        <article
          className={style.ArticleAdd}
          onClick={handleAddArticle}
          onKeyUp={handleKeyUp}
        >
          Editer un article
        </article>
        <article
          className={style.ArticleAll}
          onClick={handleShowArticle}
          onKeyUp={handleKeyUp}
        >
          Tous les articles
        </article>
      </div>
      <button className={style.goBackBtn} type="button" onClick={handleGoBack}>
        revenir en arrière
      </button>
    </section>
  );
}

export default ArticleAdminPage;
