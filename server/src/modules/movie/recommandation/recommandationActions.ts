import type { RequestHandler } from "express";
import RecommandationRepository from "./RecommandationRepository";

const addRecommandation: RequestHandler = async (req, res, next) => {
  try {
    const newRecommandation = {
      what: req.body.what,
      why: req.body.why,
      who: req.body.who,
      user_id: Number(req.body.user_id),
    };

    const insertId = await RecommandationRepository.create(newRecommandation);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const browseRec: RequestHandler = async (req, res, next) => {
  try {
    const rec = await RecommandationRepository.readAll();

    res.json(rec);
  } catch (err) {
    next(err);
  }
};

const destroyRec: RequestHandler = async (req, res, next) => {
  try {
    const recId = Number(req.params.id);

    await RecommandationRepository.delete(recId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { addRecommandation, browseRec, destroyRec };
