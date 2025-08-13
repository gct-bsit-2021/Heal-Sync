import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
