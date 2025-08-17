import mongoose from "mongoose";

const sosSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  latitude: String,
  longitude: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("SOS", sosSchema);
