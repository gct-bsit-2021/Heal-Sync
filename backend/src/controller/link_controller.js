import Link from "../models/Link.js";
import Patient from "../models/Patient.js";
import Family from "../models/Family.js";
import User from "../models/User.js"; 
import bcrypt from "bcryptjs";
import { getLinkedUserId } from "../utils/linkedid.js";


// GET linked user
export const getLinkedUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const role = req.user.role;

    const linkedId = await getLinkedUserId(userId, role);

    if (!linkedId) {
      return res.status(404).json({ message: "No linked user found" });
    }

    res.status(200).json({ linkedId });
  } catch (error) {
    console.error("Error fetching linked user:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// POST /api/link-patient
export const linkPatient = async (req, res) => {
  try {
    const { patientEmail, patientPassword } = req.body;

    if (!patientEmail || !patientPassword) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
console.log("req.user from protect:", req.user);

    // Find the logged-in family account
    const family = await Family.findById(req.user._id);
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
      patientId: patient._id,
    });
    if (existingLink) {
      return res.status(400).json({ message: "Already linked to this patient" });
    }

    // ✅ Create link in Link collection
    const link = await Link.create({
      familyId: family._id,
      patientId: patient._id,
    });

    // ✅ Also update User collection with linkedId
    await User.findByIdAndUpdate(family._id, { linkedId: patient._id });
    await User.findByIdAndUpdate(patient._id, { linkedId: family._id });

    res.status(201).json({
      message: "Patient linked successfully",
      link,
    });
  } catch (error) {
    console.error("Link creation error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
