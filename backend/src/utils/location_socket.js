import jwt from "jsonwebtoken";
import Location from "../models/Location.js";
import { getLinkedUserId } from "../utils/linkedid.js";
import Patient from "../models/Patient.js";

export default function locationSocket(io) {
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error("No token provided"));

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.user = decoded;
      next();
    } catch (err) {
      next(new Error("Invalid token"));
    }
  });

  io.on("connection", (socket) => {
    console.log("📡 Location socket connected:", socket.id);

    socket.on("locationUpdate", async ({ latitude, longitude }) => {
      try {
        let patientId;

        if (socket.user.role === "patient") {
          const patient = await Patient.findById(socket.user.id).select("_id");
          if (!patient) return;
          patientId = patient._id;
        } else if (socket.user.role === "family") {
          const linkedUser = await getLinkedUserId(socket.user.id, "family");
          if (!linkedUser) return;
          patientId = linkedUser._id;
        }

        if (!patientId) return;

        await Location.findOneAndUpdate(
          { patient: patientId },
          { latitude, longitude, updatedAt: Date.now() },
          { new: true, upsert: true }
        );

        io.emit("locationUpdated", { latitude, longitude, patientId });
      } catch (err) {
        console.error("❌ Socket location error:", err);
      }
    });
  });
}
