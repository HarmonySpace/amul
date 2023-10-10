import { Schema, model } from "mongoose";

const studentSchema = new Schema({
  cardId: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  names: {
    type: String,
    trim: true,
    required: true,
  },
  lastnames: {
    type: String,
    trim: true,
    required: true,
  },
});

export default model("Student", studentSchema);
