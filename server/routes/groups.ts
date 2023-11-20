import { Router } from "express";
import Group from "../models/Group";

const router = Router();

//get all groups
router.get("/", async (req, res) => {
  console.log("getting a group list ...");
  try {
    console.log("req to mongo")
    const group = await Group.find();
    if (!group) return res.status(404).send({ message: "ERROR: groups not found" });
    console.log("done");
    console.log(group)
    res.send(group);
  } catch (e) {
    console.log(e)
  }
})

//post a group
router.post("/", async (req, res) => {
  console.log("posting one group ...");
  try {
    console.log("take a req values");
    const { theme, state } = req.body;
    const group = new Group({ theme, state });
    console.log("saving in mongo");
    await group.save();
    if (!group) return res.status(501).send({ message: "ERROR: Group wan not added" });
    console.log("done");
    console.log(group);
    res.json(group);
  } catch (e) {
    console.log(e);
  }
})

//get a group
router.get("/id/:id", async (req, res) => {
  console.log("getting one group");
  try {
    console.log("catching a group id");
    const { id } = req.params;
    console.log("getting a < " + id + " > student ...");
    const group = await Group.findById(id);
    if (!group) return res.status(404).send({ message: "ERROR: Group not found" });
    console.log("done");
    console.log(group);
  } catch (e) {
    console.log(e)
  }
})

//update a student
router.put("/id/:id", async (req, res) => {
  console.log("updating one group");
  try {
    console.log("catching a group id");
    const { id } = req.params;
    console.log("updating a < " + id + " > student ...");
    const group = await Group.findByIdAndUpdate(id, req.body, { new: true });
    if (!group) return res.status(501).send({ message: "ERROR: Group was not updated" });
    console.log("done");
    console.log(group);
    res.json(group);
  } catch (e) {
    console.log(e);
  }
})

//delete a student
router.delete("/id/:id", async (req, res) => {
  console.log("deleting one group");
  try {
    console.log("catching a group id");
    const { id } = req.params
    console.log("deleting a < " + id + " > group ...");
    const group = await Group.findByIdAndDelete(id);
    if (!group) return res.status(501).send({ message: "ERROR: Group was not deleted" });
    console.log("done");
    console.log(group);
    res.json(group);
  } catch (e) {
    console.log(e)
  }
})

export default router;

