import axios from "./axios"
import { Student } from "../interfaces/Student"

export const addStudent = async (student: Student) => {
  await axios.post("/students", student)
}