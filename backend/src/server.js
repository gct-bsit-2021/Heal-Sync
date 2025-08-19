// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from "path";
import { fileURLToPath } from "url";

import connectDB from './config/db.js';
import startDueScheduler from './utils/due_scheduler.js';
import locationSocket from "./utils/location_socket.js"; // ✅ Import socket handler

// Load environment variables
dotenv.config();

// File path helpers for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create express app and HTTP server
const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 5000;

// Initialize Socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  }
});

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Attach io instance to app (so you can access it in controllers if needed)
app.set("io", io);

// ✅ Import routes
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
import notificationRoutes from './routes/notification_routes.js';
 import sosRoutes from "./routes/sos_routes.js";
import { sendMail } from "./utils/mailer.js";

sendMail({
  to: "your-other-email@gmail.com",
  subject: "Test Mail",
  html: "<h2>Hello from HealSync SOS</h2>",
});


// ✅ Mount API routes
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
app.use("/api/notifications", notificationRoutes);




 app.use("/api/sos", sosRoutes);

// Notifications demo EJS page
app.get('/notifications', (req, res) => {
  const demoUserId = "demo123"; // TODO: Replace with real user ID from session or token
  res.render('notifications', { userId: demoUserId });
});

// Test root route
app.get('/', (req, res) => {
  res.send('🚑 HealSync API Running');
});

// ✅ Initialize socket handlers
locationSocket(io);         
startDueScheduler(io);        

// Start the server
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
