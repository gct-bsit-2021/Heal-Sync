import express from "express";
import { registerFamily, loginFamily } from "../controller/family_controller.js";

const router = express.Router();

// POST /api/family/signup
router.post("/signup", registerFamily);

// POST /api/family/login
router.post("/login", loginFamily);

export default router;
