import { Router } from "express";
import { FriendController } from "../controllers/friend.controller";
import { authMiddleware } from "../middleware/auth.middleware";

export function createFriendRoutes(friendController: FriendController): Router {
  const router = Router();

  router.post("/request", authMiddleware, (req, res) => friendController.sendRequest(req, res));
  router.delete("/remove", authMiddleware, (req, res) => friendController.removeFriend(req, res));
  router.get("/", authMiddleware, (req, res) => friendController.getFriends(req, res));
  router.get("/incoming", authMiddleware, (req, res) => friendController.getIncomingRequests(req, res));
  router.post("/response", authMiddleware, (req, res) => friendController.respondToRequest(req, res));

  return router;
}
