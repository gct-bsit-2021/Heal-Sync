// routes/progress_routes.js
import express from "express";
import { protect } from "../middleware/auth.js";
import { getProgressReport } from "../controller/progress_controller.js";

const router = express.Router();

router.get("/", protect, getProgressReport);

export default router;
