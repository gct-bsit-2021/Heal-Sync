import Healthlog from "../models/Healthlog.js";

// Add health entry
export const addHealthEntry = async (req, res) => {
  const { patientEmail, systolic, diastolic, weight, glucose } = req.body;

  if (!patientEmail || !systolic || !diastolic || !weight || !glucose) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newEntry = new Healthlog({
      patientEmail,
      systolic,
      diastolic,
      weight,
      glucose,
    });

    await newEntry.save();
    res.status(201).json({ message: "Health entry added", data: newEntry });
  } catch (error) {
    console.error("addHealthEntry error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get health entries by patient email
export const getHealthEntriesByPatient = async (req, res) => {
  const { patientEmail } = req.params;

  try {
    const entries = await Healthlog.find({ patientEmail }).sort({ createdAt: -1 });
    res.json(entries);
  } catch (error) {
    console.error("getHealthEntriesByPatient error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
