import bcrypt from "bcryptjs";
import Family from "../models/Family.js";
import generateToken from "../utils/generateToken.js";

// Signup new family member
export const registerFamily = async (req, res) => {
  console.log("Received family signup request:", req.body);

  const { fullName, email, password } = req.body;

  try {
    const existingFamily = await Family.findOne({ email });
    if (existingFamily) {
      console.log("Family signup error: Email already registered:", email);
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const familyMember = await Family.create({
      fullName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(familyMember._id, "family");

    console.log("Family signup success for:", email);

    res.status(201).json({
      _id: familyMember._id,
      fullName: familyMember.fullName,
      email: familyMember.email,
      role: "family",
      token,
    });
  } catch (error) {
    console.error("RegisterFamily error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login existing family member
export const loginFamily = async (req, res) => {
  const { email, password } = req.body;

  try {
    const familyMember = await Family.findOne({ email });
    if (!familyMember) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, familyMember.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = generateToken(familyMember._id, "family");

    res.json({
      _id: familyMember._id,
      fullName: familyMember.fullName,
      email: familyMember.email,
      role: "family",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
