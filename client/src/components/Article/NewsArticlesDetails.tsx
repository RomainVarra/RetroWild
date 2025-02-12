import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainArticle from "../../data/MainArticle.json";
import type { articleType } from "../../types/article.type";

function NewArticlesDetails() {
  const [firstArticle, setFirstArticle] = useState<articleType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const article =
      MainArticle.find((article) => article.id === Number(id)) || null;
    setFirstArticle(article);
  }, [id]);

  if (!firstArticle) {
    return <h1>Article non trouvé</h1>;
  }

  return (
    <section>
      <h2>{firstArticle?.article_title}</h2>
      <span>{firstArticle?.author}</span>
      <span>{firstArticle?.published_date}</span>
      <img
        src={firstArticle?.picture_article}
        alt={`Représentation de l'article ${firstArticle?.article_title}`}
      />
      <h3>{firstArticle?.first_title_section}</h3>
      <p>{firstArticle?.first_section}</p>
      <h3>{firstArticle?.second_title_section}</h3>
      <p>{firstArticle?.second_section}</p>
    </section>
  );
}

export default NewArticlesDetails;
