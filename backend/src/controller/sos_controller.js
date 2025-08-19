// controller/sos_controller.js
import { getLinkedEmail } from "../utils/linkedEmail.js";
import { sendMail } from "../utils/mailer.js";
import Sos from "../models/Sos.js";

export const pressSOS = async (req, res) => {
  try {
    // only patients can press SOS
    if (req.user?.role !== "patient") {
      return res.status(403).json({ message: "Only patients can press SOS" });
    }

    const patientId = req.user._id; // ✅ from JWT (consistent with generateToken.js)
    const familyEmail = await getLinkedEmail(patientId, "patient");

    if (!familyEmail) {
      return res.status(404).json({ message: "No linked family email found" });
    }

    // Build a simple email (no lat/lng). Family should visit app to see live location.
    const patientDisplayName =
      req.user?.name || req.user?.fullName || req.user?.email || "Patient";

    const appUrl = process.env.FRONTEND_URL || "https://yourapp.com";
    const locationPage = `${appUrl}/location`; // family viewer page in your web app

    const html = `
      <p><b>${patientDisplayName}</b> just pressed <b>SOS</b>.</p>
      <p>Please open the live location here:</p>
      <p><a href="${locationPage}" target="_blank" rel="noopener noreferrer">${locationPage}</a></p>
    `;

    const mailOk = await sendMail({
      to: familyEmail,
      subject: `🚨 SOS Alert from ${patientDisplayName}`,
      html,
    });

    // Log SOS event (optional but helpful)
    await Sos.create({
      patient: patientId,
      sentTo: [familyEmail],
      message: "Patient pressed SOS (email sent with link to live location).",
    });

    if (!mailOk) {
      return res.status(500).json({ message: "Failed to send SOS email" });
    }

    return res.json({ success: true, message: "SOS alert sent to linked family email" });
  } catch (err) {
    console.error("pressSOS error:", err.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
