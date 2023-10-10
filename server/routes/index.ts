import { Router } from "express";
import documentRouter from "./documents";
import studentRouter from "./students";

const router = Router();
router.use("/api/documents", documentRouter);
router.use("/api/students", studentRouter)

export default router;
