import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();

connectDB();  // Connect to MongoDB

// Route imports
import emergencyRoutes from './routes/emergency_routes.js';
import moodLogRoutes from './routes/moodlog_routes.js';
import healthLogRoutes from './routes/healthlog_routes.js';
import patientRoutes from './routes/patient_routes.js';
import authRoutes from './routes/auth_routes.js';
import familyRoutes from './routes/family_routes.js';
 import linkRoutes from './routes/link_routes.js';
import taskRoutes from "./routes/task_routes.js";
import progressRoutes from "./routes/progress_routes.js";
import calenderRoutes from "./routes/calender_routes.js";
import locationRoutes from "./routes/location_routes.js";



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/emergency', emergencyRoutes);
app.use('/api/moodlogs', moodLogRoutes);
app.use('/api/healthlogs', healthLogRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/family', familyRoutes);
app.use("/api/tasks", taskRoutes);
 app.use('/api/link', linkRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/calenders", calenderRoutes);
app.use("/api/location", locationRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('🚑 HealSync API Running');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
