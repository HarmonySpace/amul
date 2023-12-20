import { Schema, model } from "mongoose";
import Group from "./Group"

const studentSchema = new Schema({
  cardId: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  names: {
    type: String,
    trim: true,
    required: true
  },
  lastnames: {
    type: String,
    trim: true,
    required: true
  },
  group: {
    type: Schema.Types.ObjectId, ref: Group,
    required: true
  }
});

export default model("Student", studentSchema);
