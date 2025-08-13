// import express from "express";
// import { createLink, getFamilyLinksByPatient, getPatientLinksByFamily, deleteLink } from "../controller/link_controller.js";
// import { protect } from '../middleware/auth.js';
// const router = express.Router();

// // Patient must be logged in to create link
// router.post("/", protect, createLink);

// // Get all family emails linked to a patient (no auth needed, you can change if you want)
// router.get("/patient/:email", getFamilyLinksByPatient);

// // Get all patient emails linked to a family (no auth needed, you can change if you want)
// router.get("/family/:email", getPatientLinksByFamily);

// // Delete a link (protected route? You can add auth if you want)
// router.delete("/", deleteLink);

// export default router;
