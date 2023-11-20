import { Router } from "express";
import documentRouter from "./documents";
import studentRouter from "./students";
import groupRouter from "./groups"

const router = Router();
router.use("/api/documents", documentRouter);
router.use("/api/students", studentRouter);
router.use("/api/groups", groupRouter);

export default router;
