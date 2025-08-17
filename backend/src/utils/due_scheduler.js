import cron from "node-cron";
import Task from "../models/Task.js";
import Calender from "../models/Calender.js";
import Notification from "../models/Notification.js";

export default function startDueScheduler(io) {
  // Run every minute for testing
  cron.schedule("* * * * *", async () => {
    const now = new Date();

    const today = new Date().toISOString().split("T")[0]; // e.g. "2025-08-16"

    try {
      // ====== TASK NOTIFICATIONS ======
      const dueTasks = await Task.find({
        dueDate: { $lte: now },
        status: { $ne: "completed" },
      }).lean();

      for (const t of dueTasks) {
        const payload = {
          userId: t.userId,
          message: `📝 Task "${t.title}" is due.`,
          type: "task",
          sourceId: t._id,
          sourceType: "task",
        };

        try {
          const notif = await Notification.create(payload);
          io.to(String(payload.userId)).emit("notification", notif);
        } catch (err) {
          if (err.code !== 11000) console.error("Task notif error:", err.message);
        }
      }

      // ====== CALENDAR NOTIFICATIONS ======
      const dueEvents = await Calender.find({
        date: today,
        completed: false, // optional filter if you support it
      }).lean();

      for (const ev of dueEvents) {
        for (const userId of ev.belongsTo) {
          const payload = {
            userId,
            message: `📅 Appointment "${ev.title}" is today.`,
            type: "calendar",
            sourceId: ev._id,
            sourceType: "calendar",
          };

          try {
            const notif = await Notification.create(payload);
            io.to(String(userId)).emit("notification", notif);
          } catch (err) {
            if (err.code !== 11000) console.error("Calendar notif error:", err.message);
          }
        }
      }

      console.log("✅ Scheduler run complete");
    } catch (e) {
      console.error("❌ Scheduler error:", e.message);
    }
  });
}