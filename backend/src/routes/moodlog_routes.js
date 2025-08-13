import express from "express";
import { addMoodEntry, getMoodEntriesByPatient } from "../controller/mood_controller.js";

const router = express.Router();

router.post("/add", addMoodEntry);
router.get("/:patientEmail", getMoodEntriesByPatient);

export default router;
