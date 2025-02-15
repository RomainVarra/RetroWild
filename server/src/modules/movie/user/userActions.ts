import type { RequestHandler } from "express";
import UserRepository from "./UserRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const { photo } = req.files as {
      photo: Express.Multer.File[];
    };
    const photoPath = photo[0].filename;

    const newUser = {
      pseudo: req.body.pseudo,
      email: req.body.email,
      hashed_password: req.body.hashed_password,
      role_id: req.body.role_id,
      photo: photoPath,
    };

    const insertId = await UserRepository.create(newUser);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readUserData: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const user = await UserRepository.read(id);

    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const browseUser: RequestHandler = async (req, res, next) => {
  try {
    const users = await UserRepository.readAll();

    res.status(201).json(users);
  } catch (err) {
    next(err);
  }
};

const anonymizeUser: RequestHandler = async (req, res, next) => {
  const userId = Number.parseInt(req.params.id);

  try {
    const anonymizedCandidate = await UserRepository.anonymizeUser(userId);
    res.status(200).json(anonymizedCandidate);
  } catch (err) {
    next(err);
  }
};

export default { add, readUserData, browseUser, anonymizeUser };
