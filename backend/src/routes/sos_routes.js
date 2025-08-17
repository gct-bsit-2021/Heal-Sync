import express from "express";
import { protect } from "../middleware/auth.js";
import {
  sendSOS
//  getFamilySosAlerts
  //acknowledgeSos,
} from "../controller/sos_controller.js";

const router = express.Router();

// 🚨 Patient triggers SOS
router.post("/send", protect, sendSOS);

// 📋 Family views all SOS alerts
//router.get("/get", protect, getFamilySosAlerts);

// ✅ Family acknowledges SOS
//router.patch("/acknowledge/:sosId", protect, acknowledgeSos);

export default router;
