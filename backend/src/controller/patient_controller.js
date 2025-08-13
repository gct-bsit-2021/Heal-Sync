import bcrypt from "bcryptjs";
import Patient from "../models/Patient.js";
import generateToken from "../utils/generatetoken.js";

export const registerPatient = async (req, res) => {
  console.log("Received signup request with body:", req.body);  // Log the request body

  const { fullName, email, password } = req.body;

  try {
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      console.log("Signup error: Email already registered:", email);
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const patient = await Patient.create({
      fullName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(patient._id);

    console.log("Signup success for:", email);

    res.status(201).json({
      _id: patient._id,
      fullName: patient.fullName,
      email: patient.email,
      token,
    });
  } catch (error) {
    console.error("RegisterPatient error:", error);  // Log the full error
    res.status(500).json({ message: "Server error" });
  }
};


// Login existing patient
export const loginPatient = async (req, res) => {
  const { email, password } = req.body;

  try {
    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = generateToken(patient._id);

    res.json({
      _id: patient._id,
      fullName: patient.fullName,
      email: patient.email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
