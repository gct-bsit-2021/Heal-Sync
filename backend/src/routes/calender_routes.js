import express from 'express';
import { saveLocation, getLocation } from '../controller/location_controller.js';
// import { protect } from '../middleware/auth.js';

const router = express.Router();

// For testing, removing protect middleware
router.post('/', saveLocation);

// Get latest location by patientId
router.get('/:patientId', getLocation);

export default router;
