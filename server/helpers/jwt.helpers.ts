import jwt from "jsonwebtoken";
import type { UserType } from "../src/modules/movie/user/UserRepository";

export const encodeJWT = async (payload: UserType) => {
  const { email } = payload;
  const obj = { email };

  return jwt.sign(obj, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });
};
