import express from "express";
import { registerPatient, loginPatient } from "../controller/patient_controller.js";

const router = express.Router();

// POST /api/patients/signup
router.post("/signup", registerPatient);

// POST /api/patients/login
router.post("/login", loginPatient);

export default router;
