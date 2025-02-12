import affiches from "../../assets/images/affiches_RetroWild.jpg";
import NewsArticles from "../../components/Article/NewsArticles";
import style from "./homepage.module.css";

function Homepage() {
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
      </section>
    </>
  );
}

export default Homepage;
