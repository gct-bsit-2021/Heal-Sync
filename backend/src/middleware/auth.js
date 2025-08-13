// middleware/auth.js
import jwt from "jsonwebtoken";
import Patient from "../models/Patient.js";

export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const patient = await Patient.findById(decoded.id).select("-password");
    if (!patient) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = patient;          // full patient doc if you need it
    req.userId = patient._id;    // convenience: ObjectId to use in queries
    next();
  } catch (err) {
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};
