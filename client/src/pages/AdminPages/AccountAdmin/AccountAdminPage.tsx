import { useNavigate } from "react-router-dom";
import style from "./accountAdminPage.module.css";

function AccountAdminPage() {
  const navigate = useNavigate();
  const handleUserClick = () => {
    navigate("/admin/account/user");
  };
  const handleMovieClick = () => {
    navigate("/admin/account/movie");
  };
  const handleArticleClick = () => {
    navigate("/admin/account/article");
  };
  const handleRecClick = () => {
    navigate("/admin/account/recommandation");
  };
  const handleKeyUp = () => {
    "Press Enter";
  };
  return (
    <section className={style.adminAccountSection}>
      <h1 className={style.titleAdminAccount}>Compte Administrateur</h1>
      <div className={style.articleAdminSection}>
        <article
          className={style.adminUser}
          onClick={handleUserClick}
          onKeyUp={handleKeyUp}
        >
          Utilisateur
        </article>
        <article
          className={style.adminArticle}
          onClick={handleArticleClick}
          onKeyUp={handleKeyUp}
        >
          Articles
        </article>
        <article
          className={style.adminMovie}
          onClick={handleMovieClick}
          onKeyUp={handleKeyUp}
        >
          Films
        </article>
        <article
          className={style.adminMovie}
          onClick={handleRecClick}
          onKeyUp={handleKeyUp}
        >
          Recommandation
        </article>
      </div>
    </section>
  );
}

export default AccountAdminPage;
