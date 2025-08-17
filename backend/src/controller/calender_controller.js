import mongoose from "mongoose";
import Calender from "../models/Calender.js";
import { getLinkedUserId } from "../utils/linkedid.js";
import Notification from "../models/Notification.js";

// ====================== Add Appointment ======================
// ====================== Add Appointment ======================


//import Calender from "../models/Calender.js";
import Link from "../models/Link.js";

export const addAppointment = async (req, res) => {
  try {
    const { title, location, date, time } = req.body;

    if (!title || !location || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let pId, fId;

    if (req.user.role === "patient") {
      pId = req.user._id;
      const link = await Link.findOne({ patientId: pId });
      if (link) fId = link.familyId;
    } else if (req.user.role === "family") {
      fId = req.user._id;
      const link = await Link.findOne({ familyId: fId });
      if (link) pId = link.patientId;
    }

    if (!pId || !fId) {
      return res.status(400).json({ message: "Could not resolve patient & family link" });
    }

    const appointment = await Calender.create({
      title,
      location,
      date,
      time,
      belongsTo: [pId, fId],
    });

    return res.status(201).json({
      message: "Appointment created successfully",
      appointment,
    });
  } catch (error) {
    console.error("addAppointment error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};



// ====================== Get Appointments ======================
export const getAppointments = async (req, res) => {
  try {
    const linkedUser = await getLinkedUserId(req.user._id);

    // ✅ collect both user ids as ObjectId
    const userIds = [new mongoose.Types.ObjectId(req.user._id)];
    if (linkedUser) {
      userIds.push(
        new mongoose.Types.ObjectId(
          linkedUser._id ? linkedUser._id : linkedUser
        )
      );
    }

    // ✅ fetch appointments that belong to either user
    const appointments = await Calender.find({
      belongsTo: { $in: userIds }
    }).sort({ createdAt: -1 });

    return res.status(200).json(appointments);
  } catch (error) {
    console.error("getAppointments error:", error);
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};


// ====================== Complete Appointment ======================
export const completeAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Calender.findById(id);
    if (!appointment)
      return res.status(404).json({ message: "Appointment not found" });

    // ✅ only patient can mark complete
    if (req.user.role !== "patient") {
      return res.status(403).json({ message: "Only patient can mark complete" });
    }

    // ✅ mark complete
    appointment.completed = true;
    await appointment.save();

    return res.status(200).json({
      message: "Appointment marked completed",
      appointment
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ====================== Delete Appointment ======================
export const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const io = req.app.get("io");

    // ✅ delete the appointment
    const appointment = await Calender.findByIdAndDelete(id);
    if (!appointment)
      return res.status(404).json({ message: "Appointment not found" });

    // ✅ delete related notifications
    await Notification.deleteMany({ sourceId: id, sourceType: "calendar" });

    // ✅ notify linked users about deletion
    if (appointment.belongsTo && appointment.belongsTo.length > 0) {
      appointment.belongsTo.forEach(userId => {
        io.to(String(userId)).emit("notificationRemoved", { sourceId: id });
      });
    }

    return res.status(200).json({
      message: "Appointment and related notifications deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};
