import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

export type UserType = {
  id: number;
  pseudo: string;
  email: string;
  hashed_password: string;
  photo?: string;
  role_id: number;
};

class UserRepository {
  async create(user: Omit<UserType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (pseudo, email, hashed_password, role_id, photo) VALUES (?, ?, ?, ?, ? )",
      [user.pseudo, user.email, user.hashed_password, user.role_id, user.photo],
    );
    return result.insertId;
  }
}

export default new UserRepository();
