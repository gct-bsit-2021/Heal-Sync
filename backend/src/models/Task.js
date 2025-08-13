// models/Task.js
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
    },
    dueDate: {
      type: String, // "DD/MM/YYYY"
      required: [true, "Due date is required"],
      validate: {
        validator: (v) => /^\d{2}\/\d{2}\/\d{4}$/.test(v),
        message: "Due date must be in DD/MM/YYYY format",
      },
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "Priority is required"],
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending"
},

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient", // <— changed from "User" to "Patient"
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
