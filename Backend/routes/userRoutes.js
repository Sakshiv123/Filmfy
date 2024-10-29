import express from "express";

//controller
import {
          createUser, loginuser, logoutCurrentUser, getAllUsers,
          getCurrentUserProfile, updateCurrentUserProfile
} from "../controllers/UserController.js";

//middleware
import { authorizeAdmin, authenticate } from "../middleware/authmiddleware.js";

const router = express.Router();

router
          .route("/")
          .post(createUser)
          .get(authenticate, authorizeAdmin, getAllUsers);

router.post("/auth", loginuser);
router.post("/logout", logoutCurrentUser);

router
          .route("/profile")
          .get(authenticate, getCurrentUserProfile)
          .put(authenticate, updateCurrentUserProfile);

export default router;