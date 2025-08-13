import Location from "../models/Location.js";

// Save or update the user's current location
export const saveLocation = async (req, res) => {
  try {
    let { lat, lng, patientId } = req.body;

    // If using authentication, get from token instead
    const userId = patientId || req.userId;

    if (!lat || !lng || !userId) {
      return res.status(400).json({ message: "Latitude, longitude and patient ID are required." });
    }

    const location = await Location.findOneAndUpdate(
      { patient: userId },
      { latitude: lat, longitude: lng, updatedAt: Date.now() },
      { new: true, upsert: true }
    );

    res.status(200).json({ message: 'Location saved', data: location });
  } catch (err) {
    res.status(500).json({ message: 'Error saving location', error: err.message });
  }
};

// Get the latest location of a specific user
export const getLocation = async (req, res) => {
  const { patientId } = req.params;

  try {
    const location = await Location.findOne({ patient: patientId });

    if (!location) {
      return res.status(404).json({ message: "Location not found." });
    }

    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: "Error fetching location", error: error.message });
  }
};
