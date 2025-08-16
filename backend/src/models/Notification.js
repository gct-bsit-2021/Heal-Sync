import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
    type: { type: String, enum: ["task", "calendar"], required: true },
    sourceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    sourceType: { type: String, enum: ["task", "calendar"], required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Prevent duplicate notifications
notificationSchema.index(
  { userId: 1, sourceType: 1, sourceId: 1 },
  { unique: true }
);

const Notification = mongoose.model("Notification", notificationSchema);
export default Notification; // ✅ Add this
