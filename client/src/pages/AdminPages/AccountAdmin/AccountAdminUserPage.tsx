import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { registerType } from "../../../types/user.type";
import style from "./accountAdminUserPage.module.css";

function AccountAdminUserPage() {
  const [users, setUsers] = useState<registerType[]>([]);
  const navigate = useNavigate();
  const handleUserAdd = () => {
    navigate("/admin/account/user/add");
  };
  const handleGoBack = () => {
    navigate("/admin/account");
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/admin/account/user`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data: registerType[]) => {
        setUsers(data);
      });
  }, []);

  const handleAnonymizeCandidate = async (userId: number) => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/api/admin/account/user/${userId}`;

    const response = await fetch(apiUrl, {
      method: "PUT",
      credentials: "include",
    });

    if (response.ok) {
      const anonymizedCandidate = await response.json();
      setUsers(
        users.map((user) => (user.id === userId ? anonymizedCandidate : user)),
      );
    } else {
      const errorDetail = await response.text();
      console.error(
        "Erreur lors de l'anonymisation du candidat :",
        errorDetail,
      );
    }
  };
  return (
    <section className={style.sectionUserAdmin}>
      <h1 className={style.titleUserAdmin}>Liste des utilisateurs</h1>
      <table className={style.userTable}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Pseudo</th>
            <th>Photo</th>
            <th>Email</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.pseudo}</td>
              <td>{user.photo}</td>
              <td>{user.email}</td>
              <td>
                <button
                  type="button"
                  className={style.deleteButton}
                  onClick={() => handleAnonymizeCandidate(user.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className={style.addButton} onClick={handleUserAdd}>
        Ajouter un utilisateur
      </button>
      <button
        type="button"
        onClick={handleGoBack}
        className={style.buttonGoBack}
      >
        Revenir à mon compte
      </button>
    </section>
  );
}

export default AccountAdminUserPage;
