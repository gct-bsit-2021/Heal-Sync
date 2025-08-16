import Link from "../models/Link.js";
import Patient from "../models/Patient.js";
import Family from "../models/Family.js";
import bcrypt from "bcryptjs";

// POST /api/link-patient
export const linkPatient = async (req, res) => {
  try {
    const { patientEmail, patientPassword } = req.body;

    if (!patientEmail || !patientPassword) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find the logged-in family account
    const family = await Family.findById(req.user.id);
    if (!family) {
      return res.status(404).json({ message: "Family account not found" });
    }

    // Find patient by email
    const patient = await Patient.findOne({ email: patientEmail });
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    // Verify patient password
    const isMatch = await bcrypt.compare(patientPassword, patient.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Check if already linked
    const existingLink = await Link.findOne({
      familyId: family._id,
      patientId: patient._id
    });

    if (existingLink) {
      return res.status(400).json({ message: "Already linked to this patient" });
    }

    // Create link
    const link = await Link.create({
      familyId: family._id,
      patientId: patient._id
    });

    res.status(201).json({
      message: "Patient linked successfully",
      link
    });

  } catch (error) {
    console.error("Link creation error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
