import express from "express";
import { authorizationController } from "../controllers/index.js";
import { isAuthenticated } from "../middleware/authorization.js";
import { validateFields } from '../middleware/validation.js';
import { loginSchema } from '../schemas/user.js';

const router = express.Router();

router.post("/registeruser", authorizationController.registerUser);
router.post(
  "/registeradmin/:AUTHORIZATION_KEY",
  authorizationController.registerAdmin
);
router.post("/login", validateFields(loginSchema), authorizationController.login);
router.post("/logout", authorizationController.logout);
router.get("/me", isAuthenticated, authorizationController.currentUser);
// router.get('/articlelist', isAuthenticated, authorizationController.articleList);

export default router;
