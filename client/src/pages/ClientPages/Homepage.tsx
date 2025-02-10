import affiches from "../../assets/images/affiches_RetroWild.jpg";
import style from "./homepage.module.css";

function Homepage() {
  return (
    <section className={style.homePage}>
      <h3 className={style.mainTitle}>Bienvenue sur RetroWild</h3>
      <img
        className={style.moviePictures}
        src={affiches}
        alt="Affiches de films pour illustrer retroWild"
      />
    </section>
  );
}

export default Homepage;
