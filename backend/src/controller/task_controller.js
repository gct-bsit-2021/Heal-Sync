// controller/task_controller.js
import Task from "../models/Task.js";

// Create Task
export const createTask = async (req, res) => {
  try {
    const { title, dueDate, priority } = req.body;

    if (!title || !dueDate || !priority) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const task = await Task.create({
      title,
      dueDate,
      priority,
      status: "pending", // default status when creating
      user: req.userId, // set by protect()
    });

    return res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get All Tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId }).sort({ createdAt: -1 });
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update Task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndUpdate(
      { _id: id, user: req.userId },
      req.body,
      { new: true }
    );

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
    const task = await Task.findOneAndDelete({ _id: id, user: req.userId });
    if (!task) return res.status(404).json({ message: "Task not found" });
    return res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Mark Task as Completed
export const markTaskCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndUpdate(
      { _id: id, user: req.userId },
      { status: "completed" },
      { new: true }
    );

    if (!task) return res.status(404).json({ message: "Task not found" });
    return res.status(200).json({ message: "Task marked as completed", task });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};
