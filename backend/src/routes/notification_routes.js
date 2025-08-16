// routes/notification_routes.js
import express from "express";
import { getCalendarNotifications } from "../controller/notification_controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/calendar", protect, getCalendarNotifications); // 👈 endpoint

export default router;
