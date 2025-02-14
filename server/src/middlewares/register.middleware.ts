import type { RequestHandler } from "express";

export const userRole: RequestHandler = (req, res, next) => {
  const role_id = 2;
  req.body.role_id = role_id;
  next();
};
