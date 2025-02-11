import type { RequestHandler } from "express";
import UserRepository from "../modules/movie/user/UserRepository";
import type { UserType } from "../modules/movie/user/UserRepository";
import { hashPassword } from "./argon.middleware";

export const checkEmail: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;
    const verified = await UserRepository.readByEmail(email);

    if (verified != null) {
      res.sendStatus(422);
      return;
    }
    next();
  } catch (err) {
    next(err);
  }
};

export const verifieEmail: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;
    const verified: UserType | null = await UserRepository.readByEmail(email);

    if (!verified) {
      res.sendStatus(422);
      return;
    }
    req.body.hashed_password = verified.hashed_password;
    next();
  } catch (err) {
    next(err);
  }
};
