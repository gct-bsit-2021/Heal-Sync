import mongoose from "mongoose";

const calenderSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
     createdBy: { type: String, enum: ["family", "patient"], required: true },
    completed: { type: Boolean, default: false },
    
    // 👇 add this for patient + linked family visibility
    belongsTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Calender = mongoose.model("Calender", calenderSchema);
export default Calender;
