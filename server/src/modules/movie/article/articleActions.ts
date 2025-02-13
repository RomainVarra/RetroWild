import type { RequestHandler } from "express";
import ArticleRepository from "./ArticleRepository";

const addArticle: RequestHandler = async (req, res, next) => {
  try {
    const newArticle = {
      article_title: req.body.article_title,
      published_date: req.body.published_date,
      author: req.body.author,
      picture_article: req.body.picture_article,
      first_title_section: req.body.first_title_section,
      first_section: req.body.first_section,
      second_title_section: req.body.second_title_section,
      second_section: req.body.second_section,
    };

    const insertId = await ArticleRepository.create(newArticle);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};
const browseArticle: RequestHandler = async (req, res, next) => {
  try {
    const articles = await ArticleRepository.readAll();

    res.status(201).json(articles);
  } catch (err) {
    next(err);
  }
};
const destroyArticle: RequestHandler = async (req, res, next) => {
  try {
    const articleId = Number(req.params.id);

    await ArticleRepository.delete(articleId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { addArticle, browseArticle, destroyArticle };
