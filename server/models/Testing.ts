import { Schema, model } from "mongoose";

const testSchema = new Schema({
  title: {
    type: String,
    trim: true,
    unique: true,
  },
  state: {
    type: String,
    trim: true,
  },
});

export default model("Test", testSchema);
