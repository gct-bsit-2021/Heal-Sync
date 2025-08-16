import Location from "../models/Location.js";
import { getLinkedUserId } from "../utils/linkedid.js";

// Patient updates live location
export const updateLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const userId = req.user._id;

    const location = await Location.findOneAndUpdate(
      { userId },
      { latitude, longitude, updatedAt: new Date() },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: "Location updated", location });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Family gets patient's location
export const getLocation = async (req, res) => {
  try {
    const linkedUserId = await getLinkedUserId(req.user._id, req.user.role);

    if (!linkedUserId) {
      return res.status(404).json({ message: "No linked patient found" });
    }

    const location = await Location.findOne({ userId: linkedUserId });

    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }

    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
