// controllers/location_controller.js
import Location from "../models/Location.js";
import { getLinkedUserId } from "../utils/linkedid.js";
import mongoose from "mongoose";

// Patient updates their live location
export const updateLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
      return res.status(400).json({ message: "Latitude and longitude required" });
    }

    // patientId is from req.user._id
    const patientId = req.user._id;

    const location = await Location.findOneAndUpdate(
      { patient: patientId },
      { latitude, longitude, updatedAt: Date.now() },
      { new: true, upsert: true } // create if not exist
    );

    res.json({ success: true, location });
  } catch (err) {
    res.status(500).json({ message: "Error updating location", error: err.message });
  }
};

// controller/location_controller.js
export const getLocation = async (req, res) => {
  try {
    let patientId;

    if (req.user.role === "patient") {
      patientId = req.user._id;  // ✅ always ObjectId
    } else if (req.user.role === "family") {
      const linkedUser = await getLinkedUserId(req.user._id, "family");
      if (!linkedUser) {
        return res.status(404).json({ message: "No linked patient" });
      }
      patientId = linkedUser._id;  // ✅ use ObjectId directly
    }

    const location = await Location.findOne({ patient: patientId });

    if (!location) {
      return res.status(404).json({ message: "No location found for patient" });
    }

    res.json({ success: true, location });
  } catch (err) {
    console.error("❌ getLocation error:", err);
    res.status(500).json({ message: "Server error" });
  }
};



