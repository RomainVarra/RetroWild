import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { recommandationType } from "../../../types/user.type";
import style from "./recommandationAdminPage.module.css";

function AdminRecommandationPage() {
  const [rec, setRec] = useState<recommandationType[]>([]);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/admin/account");
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/admin/account/recommandation`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data: recommandationType[]) => {
        setRec(data);
      });
  }, []);

  const handleDeleteRec = async (recId: number) => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/api/admin/account/recommandation/${recId}`;

    const response = await fetch(apiUrl, {
      method: "DELETE",
      credentials: "include",
    });

    if (response.ok) {
      navigate("/admin/account");
    }
  };
  return (
    <section className={style.sectionRecAdmin}>
      <h1 className={style.titleRecAdmin}>Liste des articles</h1>
      <table className={style.recTable}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Genre</th>
            <th>Quoi</th>
            <th>Pourquoi</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {rec.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.what}</td>
              <td>{a.who}</td>
              <td>{a.why}</td>
              <td>
                <button
                  type="button"
                  className={style.deleteButton}
                  onClick={() => handleDeleteRec(a.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        onClick={handleGoBack}
        className={style.buttonGoBack}
      >
        Revenir aux articles
      </button>
    </section>
  );
}

export default AdminRecommandationPage;
