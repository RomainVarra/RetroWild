import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Recommandation from "../../../components/User/Recommandation";
import { useAuth } from "../../../contexts/AuthContext";
import type { recommandationType } from "../../../types/user.type";
import style from "./recommandationPage.module.css";

function RecommandationPage() {
  const { userId } = useAuth();
  const navigate = useNavigate();

  const handleRecommationSubmit = async (data: recommandationType) => {
    const userData = { ...data, user_id: userId };

    try {
      const updateCompany = await fetch(
        `${import.meta.env.VITE_API_URL}/api/recommandation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
          credentials: "include",
        },
      );
      if (updateCompany.ok) {
        toast.success("Votre recommandation a bien été soumise !");
        setTimeout(() => {
          navigate("/account");
        }, 3000);
      } else {
        toast.error("Un problème est survenu ! Veuillez réessayer");
      }
    } catch (err) {
      err;
    }
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
