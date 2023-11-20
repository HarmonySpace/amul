import { Schema, model } from "mongoose"

const groupSchema = new Schema({
  theme: {
    type: String,
    trim: true,
    require: true
  },
  state: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
    require: true
  }
});

export default model("Group", groupSchema);