import mongoose from "mongoose";

const sosSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["active", "resolved"], default: "active" },
  },
  { timestamps: true }
);

export default mongoose.model("Sos", sosSchema);
