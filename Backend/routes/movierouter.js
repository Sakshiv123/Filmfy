import express from "express";
const router = express.Router();
const route = router

//controller
import {
          createmovie,
          getAllMovie,
          updatemovie,
          moviereview,
          deleteMovie,
          deletecomment,
          getnewmovies,
          gettopmovies,
          getRandommovies,
          getspecificmovie
} from "../controllers/MovieController.js";

//middleware
import { authenticate, authorizeAdmin } from "../middleware/authmiddleware.js"
import checkId from "../middleware/checkId.js"

//for public use
router.route("/all-movies").get(getAllMovie);
router.get("/new-movies", getnewmovies);
router.get("/random-movies", getRandommovies);
router.get("/specific-movie/:id", getspecificmovie);
router.get("/top-movies", gettopmovies);

//Restricted use
router.post("/:id/reviews", authenticate, checkId, moviereview);

//for admin use
router.post("/create-movie", createmovie);
router.put("/update-movie/:id", updatemovie, authenticate, authorizeAdmin);
router.delete("/delete-movie/:id", deleteMovie, authenticate, authorizeAdmin);
router.delete("/delete-comment", deletecomment, authenticate, authorizeAdmin);

export default router;