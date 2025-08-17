// routes/location_routes.js
import express from "express";
import { updateLocation, getLocation } from "../controller/location_controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Patient updates live location
router.post("/update", protect, updateLocation);

// Family gets patient live location
router.get("/view", protect, getLocation);

export default router;
