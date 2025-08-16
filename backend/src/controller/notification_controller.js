// controllers/notification_controller.js
import Calender from "../models/Calender.js";

export const getCalendarNotifications = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"

    // 🟡 Remove belongsTo filter
    const appointments = await Calender.find({
      date: today,
      completed: false,
    });

    const notifications = appointments.map((appt) => ({
      // If you still want to return it per user:
      // userId: req.user._id, 
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
