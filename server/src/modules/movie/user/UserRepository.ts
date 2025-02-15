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

  async readByEmail(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE email = ?",
      [email],
    );

    return rows[0] as UserType;
  }

  async getRoleByLabel(label: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM role WHERE label = ?",
      [label],
    );

    return rows[0];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT * FROM user WHERE id = ?
      `,
      [id],
    );

    return rows[0] as UserType;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from user");

    return rows as UserType[];
  }

  async anonymizeUser(userId: number) {
    await databaseClient.query(
      `
      UPDATE user 
      SET 
        pseudo = '###', 
        email = CONCAT('###', id), 
        photo = '###' 
      WHERE id = ?`,
      [userId],
    );
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id, pseudo, email, photo FROM user WHERE id = ?",
      [userId],
    );
    return rows[0];
  }
}

export default new UserRepository();
