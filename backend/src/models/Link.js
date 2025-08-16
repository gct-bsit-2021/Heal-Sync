// models/Link.js
import mongoose from "mongoose";

const linkSchema = new mongoose.Schema(
  {
    familyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Family",
      required: true
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Link", linkSchema);
