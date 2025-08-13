import express from "express";
import { addHealthEntry, getHealthEntriesByPatient } from "../controller/health_controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// POST /api/healthlogs/add - protected
// POST /api/healthlogs/add - protected
router.post("/add", protect, addHealthEntry);



// GET /api/healthlogs/:patientEmail - protected
router.get("/:patientEmail", protect, getHealthEntriesByPatient);

export default router;
