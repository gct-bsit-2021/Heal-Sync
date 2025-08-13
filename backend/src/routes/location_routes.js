// routes/location_routes.js
import express from 'express';
import { saveLocation } from '../controller/location_controller.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, saveLocation);

export default router;
