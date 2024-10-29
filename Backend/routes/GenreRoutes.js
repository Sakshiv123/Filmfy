import express from "express"
const router = express.Router();

import {
          creategenre,
          updategenre,
          deletegenre,
          listgenre,
          readgenre
} from "../controllers/GenreController.js"

//middleware
import { authenticate, authorizeAdmin } from "../middleware/authmiddleware.js"



router.route("/").post(authenticate, authorizeAdmin, creategenre);
router.route("/:id").put(authenticate, authorizeAdmin, updategenre);
router.route("/:id").delete(authenticate, authorizeAdmin, deletegenre);
router.route("/genres").get(listgenre);
router.route("/:id").get(readgenre);

export default router;