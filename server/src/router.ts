import express from "express";
import movieActions from "./modules/movie/movieActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
router.get("/api/movie", movieActions.browse);
router.get("/api/movie/:id", movieActions.read);
/* ************************************************************************* */

export default router;
