// controllers/notification_controller.js
import mongoose from "mongoose";
import Calender from "../models/Calender.js";
import { getLinkedUserId } from "../utils/linkedid.js";

export const getCalendarNotifications = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"

    // ✅ auto-detect both user + linked user
    const linkedUser = await getLinkedUserId(req.user._id);
    const userIds = [new mongoose.Types.ObjectId(req.user._id)];
    if (linkedUser) {
      userIds.push(
        new mongoose.Types.ObjectId(
          linkedUser._id ? linkedUser._id : linkedUser
        )
      );
    }

    // ✅ only fetch appointments for these users
    const appointments = await Calender.find({
      date: today,
      completed: false,
      belongsTo: { $in: userIds },
    });

    // ✅ build notifications
    const notifications = appointments.map((appt) => ({
      userId: req.user._id,
      message: `📅 You have an appointment today: "${appt.title}" at ${appt.time}.`,
      type: "calendar",
      sourceId: appt._id,
      sourceType: "calendar",
      read: false,
      createdAt: appt.createdAt,
    }));

    return res.status(200).json(notifications);
  } catch (error) {
    console.error("❌ Error fetching calendar notifications:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
