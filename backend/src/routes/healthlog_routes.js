// routes/healthlog_routes.js
import express from "express";
import { addHealthEntry, getHealthEntries } from "../controller/health_controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/add", protect, addHealthEntry);
router.get("/", protect, getHealthEntries); // changed

export default router;
