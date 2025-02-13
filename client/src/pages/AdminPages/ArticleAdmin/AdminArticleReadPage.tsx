import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { articleType } from "../../../types/article.type";
import style from "./adminArticleReadPage.module.css";

function AdminArticleReadPage() {
  const [articles, setArticles] = useState<articleType[]>([]);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/admin/account/article");
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/admin/account/article`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data: articleType[]) => {
        setArticles(data);
      });
  }, []);

  const handleDeleteArticle = async (articleId: number) => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/api/admin/account/article/${articleId}`;

    const response = await fetch(apiUrl, {
      method: "DELETE",
      credentials: "include",
    });

    if (response.ok) {
      navigate("/admin/account/article");
    }
  };
  return (
    <section className={style.sectionUserAdmin}>
      <h1 className={style.titleArticleAdmin}>Liste des articles</h1>
      <table className={style.articleTable}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Titre de l'article</th>
            <th>Auteur</th>
            <th>Date de publication</th>
            <th>Image</th>
            <th>Titre 1e section</th>
            <th>1e section</th>
            <th>Titre 2e section</th>
            <th>2e section</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.article_title}</td>
              <td>{a.author}</td>
              <td>{a.published_date}</td>
              <td>{a.picture_article}</td>
              <td>{a.first_title_section}</td>
              <td>{a.first_section}</td>
              <td>{a.second_title_section}</td>
              <td>{a.second_section}</td>
              <td>
                <button
                  type="button"
                  className={style.deleteButton}
                  onClick={() => handleDeleteArticle(a.id)}
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

export default AdminArticleReadPage;
