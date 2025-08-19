// routes/sos_routes.js
import express from "express";
import { protect } from "../middleware/auth.js";
import { pressSOS } from "../controller/sos_controller.js";

const router = express.Router();

// Only patient can press SOS
router.post("/press", protect, pressSOS);

export default router;
