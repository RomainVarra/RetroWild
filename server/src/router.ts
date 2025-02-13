import path from "node:path";
import express from "express";
import { comparePassword, hashPassword } from "./middlewares/argon.middleware";
import { checkAdmin, checkUser } from "./middlewares/checkRole.middleware";
import { checkEmail, verifieEmail } from "./middlewares/email.middleware";
import { upload } from "./middlewares/multer.middleware";
import { userRole } from "./middlewares/register.middleware";
import { login, verifyToken } from "./modules/movie/Auth/authActions";
import articleActions from "./modules/movie/article/articleActions";
import movieActions from "./modules/movie/movieActions";
import recommandationActions from "./modules/movie/recommandation/recommandationActions";
import userActions from "./modules/movie/user/userActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
router.get("/api/movie", movieActions.browse);
router.get("/api/movie/:id", movieActions.read);

// Le chemin pour multer
router.use(
  "/uploads",
  express.static(path.join(__dirname, "/middlewares/uploads")),
);

// Enregistrer un nouvel utilisateur
router.post(
  "/api/user/register",
  upload,
  hashPassword,
  checkEmail,
  userRole,
  userActions.add,
);

// Se connecter (Utilisateur)
router.post("/api/login", verifieEmail, comparePassword, checkUser, login);

// Mettre à jour le compte utilisateur

router.get("/api/user/:id", userActions.readUserData);

// Faire une recommandation

router.post(
  "/api/recommandation",
  verifyToken,
  recommandationActions.addRecommandation,
);

//Lire tout les articles
router.get("/api/articles", articleActions.browseArticle);

//Lire un article spécifique
router.get("/api/articles/:id", articleActions.readArticles);

//Lire tous les films
router.get("/api/movies", movieActions.browse);

/* ************************************************************************* */
//Partie Administrateur

router.post(
  "/api/admin/login",
  verifieEmail,
  comparePassword,
  checkAdmin,
  login,
);

// Afficher la liste des utilisateurs

router.get("/api/admin/account/user", verifyToken, userActions.browseUser);

// Ajouter un nouvel utilisateur
router.post(
  "/api/admin/account/user/add",
  verifyToken,
  upload,
  hashPassword,
  checkEmail,
  userRole,
  userActions.add,
);

// Anonymiser un utilisateur
router.put(
  "/api/admin/account/user/:id",
  verifyToken,
  userActions.anonymizeUser,
);

//Ajouter un article
router.post(
  "/api/admin/account/article/add",
  verifyToken,
  articleActions.addArticle,
);

//Lire l'ensemble des articles
router.get(
  "/api/admin/account/article",
  verifyToken,
  articleActions.browseArticle,
);

//supprimer un article
router.delete(
  "/api/admin/account/article/:id",
  verifyToken,
  articleActions.destroyArticle,
);

//Ajouter un film
router.post("/api/admin/account/movie/add", verifyToken, movieActions.addMovie);

//Afficher les films
router.get("/api/admin/account/movie", verifyToken, movieActions.browse);

//Supprimer un film
router.delete(
  "/api/admin/account/movie/:id",
  verifyToken,
  movieActions.destroyMovie,
);

//Lire les recommandations
router.get(
  "/api/admin/account/recommandation",
  verifyToken,
  recommandationActions.browseRec,
);

//Supprimer une recommandation
router.delete(
  "/api/admin/account/recommandation/:id",
  verifyToken,
  recommandationActions.destroyRec,
);

export default router;
