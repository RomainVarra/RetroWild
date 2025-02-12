import style from "./accountAdminUserPage.module.css";

function AccountAdminUserPage() {
  const users = [
    { id: 1, pseudo: "JohnDoe", photo: "", email: "john@example.com" },
    { id: 2, pseudo: "JaneDoe", photo: "", email: "jane@example.com" },
  ];
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
            <th>Modifier</th>
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
                <button type="button" className={style.editButton}>
                  Modifier
                </button>
              </td>
              <td>
                <button type="button" className={style.deleteButton}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className={style.addButton}>
        Ajouter un utilisateur
      </button>
    </section>
  );
}

export default AccountAdminUserPage;
