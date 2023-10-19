import axios from "./axios"
import { AxiosResponse } from "axios"
import { Student } from "../interfaces/Student"

// gets
export const getStudents = async (): Promise<AxiosResponse<Student[]>> => await axios.get("/students")
export const getStudent = async (id: string): Promise<AxiosResponse<Student>> => await axios.get("/students" + id)
//post
export const addStudent = async (student: Student) => await axios.post("/students", student)

