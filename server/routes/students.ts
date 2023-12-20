import { Router } from "express";
import Student from "../models/Student";
import { Schema } from "mongoose"

const router = Router();

//get all students
router.get("/", async (req, res) => {
  console.log("getting a students list ...");
  try {
    console.log("req to mongo");
    const student = await Student.find();
    if (!student) return res.status(404).send({ message: "ERROR: Students not found" });
    console.log("done");
    console.log(student);
    res.send(student);
  } catch (e) {
    console.log(e);
  }
});

//post a student
router.post("/", async (req, res) => {
  console.log("posting a student ...");
  try {
    console.log("take req values");
    const { cardId, names, lastnames, group } = req.body;
    const student = new Student({ cardId, names, lastnames, group });
    console.log("saving in mongo");
    await student.save();
    if (!student) return res.status(501).send({ message: "ERROR: Student was not added" });
    console.log("done");
    console.log(student);
    res.json(student);
  } catch (e) {
    console.log(e);
  }
});

//get a student
router.get("/id/:id", async (req, res) => {
  console.log("getting one sttudent ...");
  try {
    console.log("catching a student id");
    const { id } = req.params;
    console.log("getting a < " + id + " > student ...");
    const student = await Student.findById(id);
    if (!student) return res.status(404).send({ message: "ERROR: Student not found" });
    console.log("done");
    console.log(student);
    res.send(student);
  } catch (e) {
    console.log(e);
  }
});

//update a student
router.put("/id/:id", async (req, res) => {
  console.log("updating one student");
  try {
    console.log("catching a student id");
    const { id } = req.params;
    console.log("updating a < " + id + " > student ...");
    const student = await Student.findByIdAndUpdate(id, req.body, { new: true })
    if (!student) return res.status(501).send({ message: "ERROR: Student was not updatinng" });
    console.log("done");
    console.log(student)
    res.json(student)
  } catch (e) {
    console.log(e);
  }
});

//delete a student
router.delete("/id/:id", async (req, res) => {
  console.log("deleting one student");
  try {
    console.log("catching a group id");
    const { id } = req.params;
    console.log("deleting a < " + id + " > student ...");
    const student = await Student.findByIdAndDelete(id)
    if (!student) return res.status(501).send({ message: "ERROR: Student was not deleted" });
    console.log("Done");
    console.log(student);
    res.json(student)
  } catch (e) {
    console.log(e);
  }
})

export default router;
