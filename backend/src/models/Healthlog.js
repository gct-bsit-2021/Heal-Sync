import mongoose from "mongoose";

const healthlogSchema = new mongoose.Schema({
  //patientEmail: { type: String, required: true },
    patientEmail: { type: String, required: true }, 
  systolic: { type: Number, required: true },
  diastolic: { type: Number, required: true },
  weight: { type: Number, required: true },
  glucose: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Healthlog = mongoose.model("Healthlog", healthlogSchema);
export default Healthlog;
