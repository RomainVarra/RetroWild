import path from "node:path";
import express from "express";
import { hashPassword } from "./middlewares/argon.middleware";
import { upload } from "./middlewares/multer.middleware";
import { userRole } from "./middlewares/register.middleware";
import movieActions from "./modules/movie/movieActions";
import userActions from "./modules/movie/user/userActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
router.get("/api/movie", movieActions.browse);
router.get("/api/movie/:id", movieActions.read);

// Enregistrer un nouvel utilisateur

router.use(
  "/uploads",
  express.static(path.join(__dirname, "/middlewares/uploads")),
);

router.post(
  "/api/user/register",
  upload,
  hashPassword,
  userRole,
  userActions.add,
);
/* ************************************************************************* */

export default router;
