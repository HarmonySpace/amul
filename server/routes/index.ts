import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.delete("/", (req, res) => {
  res.send("Hello World!");
});

router.put("/", (req, res) => {
  res.send("Hello World!");
});

export default router;
