import { useNavigate } from "react-router-dom";
import affiches from "../../assets/images/affiches_RetroWild.jpg";
import trophée from "../../assets/images/images.jpg";
import NewsArticles from "../../components/Article/NewsArticles";
import NewsMovies from "../../components/Movie/NewsMovies";
import style from "./homepage.module.css";

function Homepage() {
  const navigate = useNavigate();
  const handleTopClick = () => {
    navigate("/tops");
  };
  return (
    <>
      <section className={style.homePage}>
        <h3 className={style.mainTitle}>Bienvenue sur RetroWild</h3>
        <img
          className={style.moviePictures}
          src={affiches}
          alt="Affiches de films pour illustrer retroWild"
        />
      </section>
      <section>
        <h3 className={style.whatIsRetroWildTitle}>RetroWild, c'est quoi ?</h3>
        <article className={style.whatIsRetroWildSection}>
          <p>C’est le site préféré des passionnés de cinéma vintage !</p>
          <p>
            Nous vous proposons une expérience immersive, inspirée des
            vidéoclubs et des affiches VHS, pour vous replonger ou vous faire
            découvrir le cinéma d’une époque révolue.
          </p>
          <p>
            RetroWild, c’est une collection d’articles (critiques, anecdotes,
            making-of) et une bibliothèque de films visionnables en toute
            légalité, composée d’œuvres tombées dans le domaine public.
          </p>
          <p>🍿 Alors, préparez votre pop-corn… et bon visionnage ! 🎬</p>
        </article>
        <section>
          <NewsArticles />
        </section>
        <section>
          <NewsMovies />
        </section>
        <h3 className={style.topTitle}>Les tops</h3>
        <section className={style.topSection}>
          <article className={style.topArticle}>
            <img
              className={style.topPicture}
              src={trophée}
              alt="Trophée pour illustrer la section top"
            />
            <p className={style.topText}>
              Découvrir sans plus attendre les tops de la rédac' !
            </p>
          </article>
          <button
            onClick={handleTopClick}
            className={style.topButton}
            type="button"
          >
            Voir les tops
          </button>
        </section>
      </section>
    </>
  );
}

export default Homepage;
