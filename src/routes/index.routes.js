import express from "express";

// Importar todas as rotas
import authRouter from "./auth.routes.js";

import gameRouter from "./game.routes.js";
import authMiddleware from "../middleware/authMiddleware.js";
import recordRouter from "./record.routes.js";

const router = express.Router();

// Rotas públicas
router.use("/auth", authRouter);
router.use("/game", gameRouter);
router.use("/record", recordRouter);

// Rotas protegidas
router.use(authMiddleware);


export default router;
