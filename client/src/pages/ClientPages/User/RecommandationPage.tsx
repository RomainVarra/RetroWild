import Recommandation from "../../../components/User/Recommandation";
import type { recommandationType } from "../../../types/user.type";
import style from "./recommandationPage.module.css";

function RecommandationPage() {
  const handleRecommationSubmit = (data: recommandationType) => {
    data;
  };
  return (
    <section className={style.recommandationSection}>
      <h2 className={style.mainTitleRecommandation}>
        Faire une recommandation
      </h2>
      <p className={style.recommandationText}>
        Votre avis nous intéresse ! Recommandez-nous un film ou un article que
        vous aimeriez voir apparaître sur notre site. Pour rappel, le sujet doit
        être en lien avec le cinéma "old school". Concernant l'ajout de
        nouvelles œuvres cinématographiques, celles-ci doivent appartenir au
        domaine public.
      </p>
      <Recommandation onSubmit={handleRecommationSubmit} />
    </section>
  );
}

export default RecommandationPage;
