import { Router } from "express";
import Test from "../models/Testing";

const router = Router();

// get all documents
router.get("/", async (req, res) => {
  const test = await Test.find();
  console.log("Getting all tasks");
  res.send(test);
});

// get one document
router.get("/:id", (req, res) => {
  res.send("Get one document");
});

// post a document
router.post("/", async (req, res) => {
  const { title, state } = req.body;
  const test = new Test({ title, state });
  await test.save();
  res.send("Post a document");
});

// update a document
router.put("/:id", (req, res) => {
  res.send("Update a document");
});

// delete a document
router.delete("/:id", (req, res) => {
  res.send("Delete a document");
});

export default router;
