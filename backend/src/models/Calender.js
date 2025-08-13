import mongoose from "mongoose";

const calenderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  date: {
    type: String, // Format: dd/mm/yyyy
    required: true,
  },
  time: {
    type: String, // Format: hh:mm
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // optional: to know who added the appointment
    required: true,
  },
}, {
  timestamps: true
});

const Calender = mongoose.model("Calender", calenderSchema);

export default Calender;
