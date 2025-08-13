import mongoose from "mongoose";

const moodlogSchema = new mongoose.Schema({
  patientEmail: {           // link mood log to patient by email (or _id if you prefer)
    type: String,
    required: true,
  },
  mood: {
    type: String,
    enum: ["happy", "sad", "angry", "anxious"],
    required: true,
  },
  notes: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Moodlog = mongoose.model("Moodlog", moodlogSchema);
export default Moodlog;
