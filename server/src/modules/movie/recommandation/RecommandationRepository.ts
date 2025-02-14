import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

export type RecommandationType = {
  id: number;
  why: string;
  who: string;
  what: string;
  user_id: number;
};

class RecommandationRepository {
  async create(recommandation: Omit<RecommandationType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO recommandation (what, who, why, user_id) VALUES (?, ?, ?, ?)",
      [
        recommandation.what,
        recommandation.who,
        recommandation.why,
        recommandation.user_id,
      ],
    );
    return result.insertId;
  }
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "select * from recommandation",
    );
    return rows as RecommandationType[];
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from recommandation where id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new RecommandationRepository();
