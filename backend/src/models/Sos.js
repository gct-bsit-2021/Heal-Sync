// models/Sos.js
import mongoose from "mongoose";

const sosSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
    sentTo: [{ type: String }],   // emails where alert was sent
    message: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Sos", sosSchema);
