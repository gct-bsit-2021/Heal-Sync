import express from "express";
import { protect } from "../middleware/auth.js";
import { linkPatient } from "../controller/link_controller.js";
//import { addHealthEntry, getHealthEntries } from "../controller/health_controller.js";

const router = express.Router();

// POST request to link patient to family
router.post("/link-patient", protect, linkPatient);

export default router;
