// models/Location.js
import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
      unique: true, // each patient has only one current location
    },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Location", locationSchema);
