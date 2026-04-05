import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";

export function createUserRoutes(userController: UserController): Router {
    const router = Router();

    router.get('/profile', authMiddleware, (req, res) => userController.getProfile(req, res));
    router.get('/search', authMiddleware, (req, res) => userController.searchUsers(req, res));
    router.get('/leaderboard', authMiddleware, (req, res) => userController.getLeaderboard(req, res));

    return router;
}
