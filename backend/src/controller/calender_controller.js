import mongoose from "mongoose";
import Calender from "../models/Calender.js";
import { getLinkedUserId } from "../utils/linkedid.js";

// Add a new appointment
export const addAppointment = async (req, res) => {
  try {
    const { title, location, date, time, createdBy } = req.body; // 👈 role removed, createdBy string comes from frontend

    if (!title || !location || !date || !time || !createdBy) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // belongsTo → creator (from token) + linked user
    const belongsTo = [req.user._id];
    const linkedUser = await getLinkedUserId(req.user._id);
    if (linkedUser) {
      belongsTo.push(linkedUser._id ? linkedUser._id : linkedUser);
    }

    const appointment = await Calender.create({
      title,
      location,
      date,
      time,
      createdBy,   // 👈 now stores "family" | "patient"
      belongsTo,   // assign array
    });

    return res
      .status(201)
      .json({ message: "Appointment created successfully", appointment });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// Get all appointments (no filter)
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Calender.find().sort({ createdAt: -1 });

    return res.status(200).json(appointments);
  } catch (error) {
    console.error("getAppointments error:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};


// Mark appointment as complete
export const completeAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Calender.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true }
    );

    if (!appointment)
      return res.status(404).json({ message: "Appointment not found" });

    return res
      .status(200)
      .json({ message: "Appointment marked completed", appointment });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// Delete appointment
export const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Calender.findByIdAndDelete(id);
    if (!appointment)
      return res.status(404).json({ message: "Appointment not found" });

    return res
      .status(200)
      .json({ message: "Appointment deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
