import Task from "../models/Task.js";
import { getLinkedUserId } from "../utils/linkedid.js";

// Create Task
export const createTask = async (req, res) => {
  try {
    const { title, dueDate, priority } = req.body;

    if (!title || !dueDate || !priority) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 1. Always include logged-in user
    const belongsToIds = [req.user._id];

    // 2. Add linked user (if exists)
    const linkedUserId = await getLinkedUserId(req.user._id, req.user.role);
    if (linkedUserId) belongsToIds.push(linkedUserId);

    // 3. Create task
    const task = await Task.create({
      title,
      dueDate,
      priority,
      status: "pending",
      createdBy: req.user._id,
      belongsTo: belongsToIds, // patient + family
    });

    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    console.error("createTask error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getTasks = async (req, res) => {
  try {
    const linkedUser = await getLinkedUserId(req.user._id);

    // Collect both IDs
    const userIds = [req.user._id.toString()];
    if (linkedUser) {
      userIds.push(linkedUser._id.toString());
    }

    const tasks = await Task.find({ belongsTo: { $in: userIds } })
      .populate("createdBy", "fullName email")
      .sort({ createdAt: -1 });

    return res.status(200).json(tasks);
  } catch (error) {
    console.error("getTasks error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update Task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: "Task not found" });
    return res.status(200).json({ message: "Task updated", task });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    // Only patient can delete
    if (req.user.role !== "patient") {
      return res.status(403).json({ message: "Only patient can delete tasks" });
    }

    // Find the task
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    // Delete task for patient
    await Task.findByIdAndDelete(id);

    // Delete task for linked family (if linked)
    const linkedUser = await getLinkedUserId(req.user._id);
    if (linkedUser) {
      await Task.deleteMany({ _id: id, userId: linkedUser._id });
    }

    return res.status(200).json({ message: "Task deleted for patient and linked family" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// marked done 

export const markTaskCompleted = async (req, res) => {
  try {
    const { id } = req.params;

    // Only patient can mark completed
    if (req.user.role !== "patient") {
      return res.status(403).json({ message: "Only patient can mark tasks completed" });
    }

    // Find the task
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    // Mark as completed for patient
    task.status = "completed";
    await task.save();

    // Also mark for linked family (if exists)
    const linkedUser = await getLinkedUserId(req.user._id);
    if (linkedUser) {
      await Task.updateMany(
        { _id: id, userId: linkedUser._id },
        { status: "completed" }
      );
    }

    return res.status(200).json({ message: "Task marked completed", task });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

