import databaseClient from "../../../../database/client";

import type { Result } from "../../../../database/client";

export type articleType = {
  id: number;
  article_title: string;
  published_date: string;
  author: string;
  picture_article: string;
  first_title_section: string;
  first_section: string;
  second_title_section: string;
  second_section: string;
};

class ArticleRepository {
  async create(article: Omit<articleType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO article (article_title, author, published_date, picture_article, first_title_section, first_section, second_title_section, second_section ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        article.article_title,
        article.author,
        article.published_date,
        article.picture_article,
        article.first_title_section,
        article.first_section,
        article.second_title_section,
        article.second_section,
      ],
    );
    return result.insertId;
  }
}

export default new ArticleRepository();
