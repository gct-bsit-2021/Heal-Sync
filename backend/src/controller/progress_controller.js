// controllers/progress_controller.js
import Task from "../models/Task.js";

export const getProgressReport = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId });

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.status === "completed").length; // <- FIX
    const pendingTasks = totalTasks - completedTasks;

    const lowPriority = tasks.filter(t => t.priority === "low").length;
    const mediumPriority = tasks.filter(t => t.priority === "medium").length;
    const highPriority = tasks.filter(t => t.priority === "high").length;

    const progressPercent = totalTasks > 0
      ? Math.round((completedTasks / totalTasks) * 100)
      : 0;

    return res.status(200).json({
      totalTasks,
      completedTasks,
      pendingTasks,
      priorityBreakdown: {
        low: lowPriority,
        medium: mediumPriority,
        high: highPriority
      },
      progressPercent
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};
