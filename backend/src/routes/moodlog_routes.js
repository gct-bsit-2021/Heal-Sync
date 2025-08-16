import express from "express";
import { addMoodEntry, getMoodEntries } from "../controller/mood_controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Add mood entry (patient only)
router.post("/add", protect, addMoodEntry);

// Get mood entries (patient sees own, family sees linked patient)
router.get("/", protect, getMoodEntries);

export default router;
