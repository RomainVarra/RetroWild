import express from "express";
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

router.post("/api/user/register", userActions.add);
/* ************************************************************************* */

export default router;
