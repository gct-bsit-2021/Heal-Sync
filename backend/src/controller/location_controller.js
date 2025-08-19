import Location from "../models/Location.js";
import { getLinkedUserId } from "../utils/linkedid.js";

/**
 * Patient updates location
 * (frontend ko location.latitude/longitude dena hoga - browser ya mobile se fetch hoga)
 */
export const updateLocation = async (req, res) => {
  try {
    if (req.user.role !== "patient") {
      return res.status(403).json({ message: "Only patients can update location" });
    }

    const { latitude, longitude } = req.body;
    if (!latitude || !longitude) {
      return res.status(400).json({ message: "Latitude and longitude required" });
    }

    const patientId = req.user._id;

    const location = await Location.findOneAndUpdate(
      { patient: patientId },
      { latitude, longitude, updatedAt: Date.now() },
      { new: true, upsert: true }
    );

    return res.json({ success: true, location });
  } catch (err) {
    console.error("updateLocation error:", err);
    return res.status(500).json({ message: "Error updating location" });
  }
};

/**
 * Get patient's current location
 * - If role = patient → apna location
 * - If role = family → linked patient ka location
 */
export const getLocation = async (req, res) => {
  try {
    let patientId;

    if (req.user.role === "patient") {
      patientId = req.user._id;
    } else if (req.user.role === "family") {
      const linkedUser = await getLinkedUserId(req.user._id, "family");
      if (!linkedUser) {
        return res.status(404).json({ message: "No linked patient" });
      }
      patientId = linkedUser._id;
    } else {
      return res.status(403).json({ message: "Invalid role" });
    }

    const location = await Location.findOne({ patient: patientId });
    if (!location) {
      return res.status(404).json({ message: "No location found for patient" });
    }

    return res.json({ success: true, location });
  } catch (err) {
    console.error("getLocation error:", err);
    return res.status(500).json({ message: "Error fetching location" });
  }
};
