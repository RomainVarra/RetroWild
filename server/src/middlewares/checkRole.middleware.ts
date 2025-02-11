import type { RequestHandler } from "express";
import UserRepository from "../modules/movie/user/UserRepository";

const checkRole = (expectedRoleLabel: string): RequestHandler => {
  return async (req, res, next) => {
    try {
      const { email } = req.body;
      const user = await UserRepository.readByEmail(email);
      const role = await UserRepository.getRoleByLabel(expectedRoleLabel);

      if (!role || user.role_id !== role.id) {
        res.sendStatus(403);
        return;
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};

export const checkUser = checkRole("User");
export const checkAdmin = checkRole("Admin");
