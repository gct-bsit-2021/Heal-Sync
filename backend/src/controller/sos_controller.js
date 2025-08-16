import Sos from "../models/Sos.js";
import Location from "../models/Location.js";
import Healthlog from "../models/Healthlog.js";
import Link from "../models/Link.js";
import User from "../models/User.js";
import twilio from "twilio"; // or any SMS service

// Twilio client (replace with your real keys)
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Trigger SOS
export const triggerSOS = async (req, res) => {
  try {
    // ✅ Ensure only patients can press SOS
    if (req.user.role !== "patient") {
      return res.status(403).json({ message: "Only patients can trigger SOS" });
    }

    // 1. Create SOS record
    const sos = await Sos.create({
      patientId: req.user.id,
      status: "active",
    });

    // 2. Fetch patient’s live location
    const location = await Location.findOne({ userId: req.user.id })
      .sort({ createdAt: -1 })
      .lean();

    // 3. Fetch patient’s health logs (latest 5 entries for SMS brevity)
    const healthLogs = await Healthlog.find({ userId: req.user.id })
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    // 4. Find linked family members
    const links = await Link.find({ patientId: req.user.id }).populate("familyId");
    const familyMembers = links.map(l => l.familyId);

    // 5. Prepare SMS content
    let logSummary = healthLogs
      .map(log => `BP:${log.systolic}/${log.diastolic} HR:${log.heartRate} Temp:${log.temperature}`)
      .join(" | ");

    const smsBody = `
🚨 SOS Alert 🚨
Patient: ${req.user.name}
Location: https://maps.google.com/?q=${location?.latitude || 0},${location?.longitude || 0}
Health Logs: ${logSummary || "No recent logs"}
    `;

    // 6. Send SMS to each family member
    for (let fam of familyMembers) {
      if (fam.phoneNumber) {
        await client.messages.create({
          body: smsBody,
          from: process.env.TWILIO_PHONE, // Your Twilio number
          to: fam.phoneNumber,
        });
      }
    }

    res.status(201).json({ message: "SOS triggered successfully", sos });
  } catch (error) {
    console.error("SOS Error:", error);
    res.status(500).json({ message: "Failed to trigger SOS", error: error.message });
  }
};

// Resolve SOS (optional)
export const resolveSOS = async (req, res) => {
  try {
    const sos = await Sos.findById(req.params.id);
    if (!sos) return res.status(404).json({ message: "SOS not found" });

    sos.status = "resolved";
    await sos.save();

    res.json({ message: "SOS resolved", sos });
  } catch (error) {
    console.error("Resolve SOS Error:", error);
    res.status(500).json({ message: "Failed to resolve SOS", error: error.message });
  }
};
