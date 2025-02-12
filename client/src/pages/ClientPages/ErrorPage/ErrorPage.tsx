import { useNavigate } from "react-router-dom";
import style from "./errorPage.module.css";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <section className={style.errorPage}>
      <h1 className={style.Title}>Error 404</h1>
      <article className={style.errorSection}>
        <img
          className={style.errorImg}
          src="/Images/giphy.webp"
          alt="Le titanic coule. Comme mon site... Bienvenue sur ma page 404"
        />
        <p className={style.errorText}>
          L'erreur. Le truc pas prévu. La page qui déconne. Le développeur a
          vraiment mal fait son travail !
        </p>
      </article>
      <button
        type="button"
        className={style.errorBtn}
        onClick={() => navigate("/")}
      >
        Retour à l'accueil
      </button>
    </section>
  );
}

export default ErrorPage;
