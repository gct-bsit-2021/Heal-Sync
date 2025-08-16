// middleware/auth.js
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Patient from "../models/Patient.js";
import Family from "../models/Family.js";

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    let user =
      (await User.findById(decoded.id).select("-password")) ||
      (await Patient.findById(decoded.id).select("-password")) ||
      (await Family.findById(decoded.id).select("-password"));

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // ✅ Store _id (not id) so controllers work properly
    req.user = {
      _id: user._id, // 🔹 Changed from id → _id
      email: user.email,
      fullName: user.fullName || null,
      role:
        user.role ||
        (user instanceof Patient
          ? "patient"
          : user instanceof Family
          ? "family"
          : "user"),
    };

    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};
