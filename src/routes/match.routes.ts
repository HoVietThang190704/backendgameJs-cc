import { Router } from "express";
import { MatchController } from "../controllers/match.controller";
import { authMiddleware } from "../middleware/auth.middleware";

export function createMatchRoutes(matchController: MatchController): Router {
  const router = Router();

  router.post("/create", authMiddleware, (req, res) => matchController.createPrivateMatch(req, res));
  router.post("/join", authMiddleware, (req, res) => matchController.joinMatch(req, res));
  router.get("/active", authMiddleware, (req, res) => matchController.getActiveMatch(req, res));
  router.get("/:id", authMiddleware, (req, res) => matchController.getMatchState(req, res));
  router.delete("/:id/leave", authMiddleware, (req, res) => matchController.leaveMatch(req, res));
  router.patch("/:id/ready", authMiddleware, (req, res) => matchController.setReady(req, res));
  router.post("/:matchId/start", authMiddleware, (req, res) => matchController.startMatch(req, res));

  return router;
}
