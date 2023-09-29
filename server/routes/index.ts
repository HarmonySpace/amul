import { Router } from "express";
import documentRouter from "./documents";

const router = Router();
router.use("/api/documents", documentRouter);

export default router;
