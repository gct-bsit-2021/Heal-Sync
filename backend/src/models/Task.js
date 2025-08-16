import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    dueDate: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /^\d{2}\/\d{2}\/\d{4}$/.test(v),
        message: "Due date must be in DD/MM/YYYY format",
      },
    },
    priority: { type: String, enum: ["low", "medium", "high"], required: true },
    status: { type: String, enum: ["pending", "completed"], default: "pending" },

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    // 👇 new field for patient + family linkage
    belongsTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
