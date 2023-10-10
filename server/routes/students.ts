import { Router } from "express";
import Student from "../models/Student";

const router = Router();

//get all students
router.get("/", async (req, res) => {
  try {
    console.log("Getting a students list ...");
    const student = await Student.find();
    if (!student) return res.status(404).send({ message: "ERROR: Students not found" });
    console.log("Done");
    res.send(student);
  } catch (e) {
    console.log(e);
  }
});

//post a student
router.post("/", async (req, res) => {
  try {
    const { cardId, names, lastnames } = req.body;
    console.log("Posting a student ...");
    const student = new Student({ cardId, names, lastnames });
    await student.save();
    if (!student) return res.status(501).send({ message: "Don't add a student" });
    console.log("Done");
    res.json(student);
  } catch (e) {
    console.log(e);
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Getting a < " + id + " > student ...");
    const student = await Student.findById(id);
    if (!student) return res.status(404).send({ message: "Student not found" });
    console.log("Done");
    res.send(student);
  } catch (e) {
    console.log(e);
  }
});

router.put("/id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Updating a < " + id + " > student ...");
    const student = await Student.findByIdAndUpdate(id, req.body, { new: true})
    if (!student) return res.status(501).send({ message: "Don't update a student" });
    console.log("Done");
    res.json(student)
  } catch (e) {
    console.log(e);
  }
});
 router.delete("/id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleting a < " + id + "> student ...");
    const student = await Student.findByIdAndDelete(id)
    if (!student) return res.status(501).send({ message: "Don't delete a student" });
    console.log("Done");
    res.json(student)
  }catch (e) {
    console.log(e);
  }
 })

export default router;
