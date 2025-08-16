import Moodlog from "../models/Moodlog.js";
import Patient from "../models/Patient.js";
import { getLinkedUserId } from "../utils/linkedid.js";

// Add mood entry (patient only)
export const addMoodEntry = async (req, res) => {
  if (!req.user || req.user.role !== "patient") {
    return res.status(403).json({ message: "Only patients can add moods" });
  }

  const { mood, notes } = req.body;
  if (!mood) {
    return res.status(400).json({ message: "Mood is required" });
  }

  try {
    const newEntry = await Moodlog.create({
      patientEmail: req.user.email, // logged-in patient
      mood,
      notes: notes || ""
    });

    res.status(201).json({ message: "Mood entry added", data: newEntry });
  } catch (error) {
    console.error("addMoodEntry error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get mood entries (patient sees own, family sees linked patient)
export const getMoodEntries = async (req, res) => {
  try {
    let patientEmail;

    if (req.user.role === "patient") {
      // Patient sees their own logs
      patientEmail = req.user.email;
    } else if (req.user.role === "family") {
      // Use _id instead of id
      const linkedPatientId = await getLinkedUserId(req.user._id, "family");
      if (!linkedPatientId) {
        return res.status(404).json({ message: "No linked patient found" });
      }

      const linkedPatient = await Patient.findById(linkedPatientId);
      if (!linkedPatient) {
        return res.status(404).json({ message: "Linked patient not found" });
      }

      patientEmail = linkedPatient.email;
    } else {
      return res.status(403).json({ message: "Unauthorized role" });
    }

    const entries = await Moodlog.find({ patientEmail }).sort({ createdAt: -1 });
    res.json(entries);
  } catch (error) {
    console.error("getMoodEntries error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
