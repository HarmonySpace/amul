import { Schema, model } from "mongoose";

const monoSchema = new Schema({
  // grupo
  gTitle: {
    type: String,
    trim: true,
    unique: true,
  },
  gState: {
    type: String,
    trim: true,
  },
  // datos de los estudiantes
  e1Name: {
    type: String,
    trim: true,
  },
  e1Lastname: {
    type: String,
    trim: true,
  },
  e1Carnet: {
    type: String,
    trim: true,
  },
  e2Name: {
    type: String,
    trim: true,
  },
  e2Lastname: {
    type: String,
    trim: true,
  },
  e2Carnet: {
    type: String,
    trim: true,
  },
  e3Name: {
    type: String,
    trim: true,
  },
  e3Lastname: {
    type: String,
    trim: true,
  },
  e3Carnet: {
    type: String,
    trim: true,
  },
  // datos del departamento
  uFaculty: {
    type: String,
    trim: true,
  },
  uDepartment: {
    type: String,
    trim: true,
  },
  // datos del tutor
  tName: {
    type: String,
    trim: true,
  },
  tLastname: {
    type: String,
    trim: true,
  },
  tCarnet: {
    type: String,
    trim: true,
  },
  //datos de la tesis
  pDate: {
    type: String,
    trim: true,
  },
  pState: {
    type: String,
    trim: true,
  },
  pfile: {
    type: String,
    trim: true,
  },
});
export default model("Monograph", monoSchema);
