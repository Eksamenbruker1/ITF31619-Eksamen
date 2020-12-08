import express from "express";
import { articleController } from "../controllers/index.js";
import { isAuthenticated, isAuthorized } from "../middleware/authorization.js";

const router = express.Router();

router.get("/:slug", articleController.get);
router.get("/", articleController.list);

router.post("/", [isAuthenticated, isAuthorized()], articleController.create);

router.put("/:id", [isAuthenticated, isAuthorized()], articleController.update);

router.delete(
  "/:id",
  [isAuthenticated, isAuthorized()],
  articleController.remove
);

export default router;
