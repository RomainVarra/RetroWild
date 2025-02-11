import type { RequestHandler } from "express";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newUser = {
      pseudo: req.body.pseudo,
      email: req.body.email,
      password: req.body.password,
      photo: req.body.photo,
    };

    console.log(newUser);

    res.status(201).json();
  } catch (err) {
    next(err);
  }
};

export default { add };
