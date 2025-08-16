import express from 'express';
import { completeAppointment , addAppointment, getAppointments, deleteAppointment } from '../controller/calender_controller.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// For now without protect middleware
router.post('/', protect, addAppointment);
router.get('/', protect, getAppointments);
router.delete('/:id', protect, deleteAppointment);
router.patch('/complete/:id', protect, completeAppointment);

export default router;
