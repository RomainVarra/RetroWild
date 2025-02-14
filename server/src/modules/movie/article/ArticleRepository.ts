import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

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
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from article");

    return rows as articleType[];
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from article where id = ?",
      [id],
    );

    return result.affectedRows;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT * FROM article WHERE id = ?
      `,
      [id],
    );

    return rows[0] as articleType;
  }
}

export default new ArticleRepository();
