// controllers/sos_controller.js
import Link from "../models/Link.js";
import Location from "../models/Location.js";

export const sendSOS = async (req, res) => {
  try {
    let pId, fId;

    // ✅ Resolve patient and family like addAppointment
    if (req.user.role === "patient") {
      pId = req.user._id;
      const link = await Link.findOne({ patientId: pId });
      if (link) fId = link.familyId;
    } else if (req.user.role === "family") {
      fId = req.user._id;
      const link = await Link.findOne({ familyId: fId });
      if (link) pId = link.patientId;
    }

    if (!pId || !fId) {
      return res.status(400).json({ message: "Could not resolve patient & family link" });
    }

    // ✅ Fetch latest patient location (same as /location/view)
    const latestLocation = await Location.findOne({ userId: pId })
      .sort({ createdAt: -1 }) // latest entry
      .lean();

    // 🚨 SOS confirmed with location
    return res.status(200).json({
      success: true,
      message: "🚨 SOS triggered successfully",
      patient: pId,
      notifiedFamily: fId,
      location: latestLocation || "No location found",
    });
  } catch (error) {
    console.error("triggerSOS error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};
