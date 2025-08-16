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

// Get all tasks visible to logged-in user (patient + linked family)
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ belongsTo: req.user._id })
      .populate("createdBy", "fullName email") // optional: see who created it
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

// Delete Task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    return res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Mark Task Completed
export const markTaskCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, { status: "completed" }, { new: true });
    if (!task) return res.status(404).json({ message: "Task not found" });
    return res.status(200).json({ message: "Task marked completed", task });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};
