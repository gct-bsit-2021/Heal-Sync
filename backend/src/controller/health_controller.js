import Healthlog from "../models/Healthlog.js";
import Patient from "../models/Patient.js";
import { getLinkedUserId } from "../utils/linkedid.js";

// Add health entry (only patient)
export const addHealthEntry = async (req, res) => {
  if (!req.user || req.user.role !== "patient") {
    return res.status(403).json({ message: "Only patients can add health records" });
  }

  const { systolic, diastolic, weight, glucose } = req.body;
  if (!systolic || !diastolic || !weight || !glucose) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Fetch latest patient email from DB to ensure accuracy
    const patient = await Patient.findById(req.user._id).select("email");
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const newEntry = await Healthlog.create({
      patientEmail: patient.email.trim().toLowerCase(),
      systolic,
      diastolic,
      weight,
      glucose,
      createdBy: req.user._id, // ✅ track who created it
    });

    res.status(201).json({ message: "Health entry added", data: newEntry });
  } catch (error) {
    console.error("addHealthEntry error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get health entries (patient sees their own, family sees linked patient)
export const getHealthEntries = async (req, res) => {
  try {
    let patientEmail;

    if (req.user.role === "patient") {
      const patient = await Patient.findById(req.user._id).select("email");
      if (!patient) {
        return res.status(404).json({ message: "Patient not found" });
      }
      patientEmail = patient.email.trim().toLowerCase();

    } else if (req.user.role === "family") {
      const linkedPatientId = await getLinkedUserId(req.user._id, "family");
      if (!linkedPatientId) {
        return res.status(404).json({ message: "No linked patient found" });
      }

      const linkedPatient = await Patient.findById(linkedPatientId).select("email");
      if (!linkedPatient) {
        return res.status(404).json({ message: "Linked patient not found" });
      }
      patientEmail = linkedPatient.email.trim().toLowerCase();

    } else {
      return res.status(403).json({ message: "Unauthorized role" });
    }

    // Case-insensitive search for patient email
    const entries = await Healthlog.find({
      patientEmail: { $regex: new RegExp(`^${patientEmail}$`, "i") }
    }).sort({ createdAt: -1 });

    res.json(entries);
  } catch (error) {
    console.error("getHealthEntries error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
