import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

export const adminModel = mongoose.model("admin",adminSchema)