import type { RequestHandler } from "express";
import { encodeJWT } from "../../../../helpers/jwt.helpers";
import UserRepository from "../user/UserRepository";

export const login: RequestHandler = async (req, res) => {
  const user = await UserRepository.readByEmail(req.body.email);
  const userId = user.id;
  const token = await encodeJWT(user);

  res
    .status(200)
    .cookie("auth_token", token, {
      httpOnly: false,
      secure: false,
      maxAge: 86400,
    })
    .json({ userId: userId });
};
