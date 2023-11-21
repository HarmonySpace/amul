import axios from "./axios"
import { AxiosResponse } from "axios"
import { Student } from "../interfaces/Student"

//gets
export const getStudents = async (): Promise<AxiosResponse<Student[]>> => await axios.get("/students");
export const getStudent = async (id: string): Promise<AxiosResponse<Student>> => await axios.get("/students/id/" + id);
//post
export const addStudent = async (student: Student): Promise<AxiosResponse<Student>> => await axios.post("/students", student);
//put
export const putStudent = async (id: string, student: Student): Promise<AxiosResponse<Student>> => await axios.put("/students/id/" + id, student);
//delete
export const deleteStudent = async (id: string): Promise<AxiosResponse<Student>> => await axios.delete("/students/id/" + id);
