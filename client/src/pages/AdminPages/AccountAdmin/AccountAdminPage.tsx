import style from "./accountAdminPage.module.css";

function AccountAdminPage() {
  return (
    <section className={style.adminAccountSection}>
      <h1 className={style.titleAdminAccount}>Compte Administrateur</h1>
      <div className={style.articleAdminSection}>
        <article className={style.adminUser}>Utilisateur</article>
        <article className={style.adminArticle}>Articles</article>
        <article className={style.adminMovie}>Films</article>
      </div>
    </section>
  );
}

export default AccountAdminPage;
