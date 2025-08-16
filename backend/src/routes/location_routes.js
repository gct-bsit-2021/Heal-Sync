import express from "express";
import { protect } from "../middleware/auth.js";
import { updateLocation, getLocation } from "../controller/location_controller.js";

const router = express.Router();

router.post("/update", protect, updateLocation); // patient sends location
router.get("/get", protect, getLocation); // family gets location

export default router;
