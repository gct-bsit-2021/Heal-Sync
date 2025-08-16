// routes/task_routes.js
import express from "express";
import { createTask, getTasks, updateTask, deleteTask ,markTaskCompleted } from "../controller/task_controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, createTask);      // POST /api/tasks
router.get("/", protect, getTasks);         // GET  /api/tasks
router.put("/:id", protect, updateTask);    // PUT  /api/tasks/:id
router.delete("/:id", protect, deleteTask); // DEL  /api/tasks/:id
router.patch("/:id/complete", protect, markTaskCompleted);

export default router;