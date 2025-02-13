import { useEffect, useState } from "react";
import trophee from "../../assets/images/images.jpg";
import topData from "../../data/Tops.json";
import type { topType } from "../../types/tops.type";
import style from "./tops.module.css";

function Tops() {
  const [top, setTop] = useState<topType[]>([]);

  useEffect(() => {
    setTop(topData);
  });
  return (
    <section className={style.TopSection}>
      <h1 className={style.TopTitle}>Les Tops de la redac'</h1>
      <img
        className={style.topImg}
        src={trophee}
        alt="illustration de la section TOP"
      />
      <span className={style.introTop}>
        🎬 Top 10 des Films Tombés dans le Domaine Public 🎬
      </span>
      <article className={style.topPara}>
        <p>
          Certains chefs-d'œuvre du cinéma ont traversé les décennies pour
          devenir des trésors intemporels. Aujourd'hui, ces films légendaires
          sont accessibles à tous, libres de droits et à (re)découvrir sans
          modération.
        </p>
        <p>
          De l'horreur expressionniste à la comédie burlesque, voici 10 pépites
          du septième art qui ont marqué l'histoire du cinéma et que vous pouvez
          voir gratuitement !
        </p>
      </article>
      <article>
        {top.map((t) => (
          <div className={style.topList} key={t.id}>
            <section className={style.classementSection}>
              <img src={t.picture} alt={t.title} className={style.filmImage} />
              <article className={style.topArticle}>
                <h2 className={style.filmTitle}>
                  {t.id}- {t.title}
                </h2>
                <p className={style.filmDirector}>
                  <strong>Réalisé par :</strong> {t.director} ({t.year})
                </p>
                <p className={style.filmGenre}>
                  <strong>Genre :</strong> {t.genre}
                </p>
                <p className={style.filmSynopsis}>{t.synopsis}</p>
              </article>
            </section>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Tops;
