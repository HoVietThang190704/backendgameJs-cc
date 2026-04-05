import { Router } from "express";
import { WaitingQueueController } from "../controllers/waitingQueue.controller";
import { authMiddleware } from "../middleware/auth.middleware";

export function createWaitingQueueRoutes(waitingQueueController: WaitingQueueController): Router {
  const router = Router();

  router.post("/find", authMiddleware, (req, res) => waitingQueueController.findMatch(req, res));
  router.delete("/cancel", authMiddleware, (req, res) => waitingQueueController.cancelMatch(req, res));

  return router;
}
