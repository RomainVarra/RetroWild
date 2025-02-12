import databaseClient from "../../../../database/client";

import type { Result } from "../../../../database/client";

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
}

export default new RecommandationRepository();
