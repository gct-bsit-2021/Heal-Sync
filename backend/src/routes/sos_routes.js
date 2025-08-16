import express from "express";
import { triggerSOS, resolveSOS } from "../controllers/sos_controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, triggerSOS); // Only patient can press
router.patch("/:id/resolve", protect, resolveSOS);

export default router;
