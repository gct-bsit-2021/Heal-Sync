import jwt from "jsonwebtoken";
import Patient from "../models/Patient.js";
import Family from "../models/Family.js";

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (!decoded || !decoded.role) {
        return res.status(401).json({ message: "Token missing role, please login again" });
      }

      if (decoded.role === "patient") {
        req.user = await Patient.findById(decoded.id).select("-password");
        if (!req.user) return res.status(404).json({ message: "Patient not found" });
        req.user.role = "patient";
      } else if (decoded.role === "family") {
        req.user = await Family.findById(decoded.id).select("-password");
        if (!req.user) return res.status(404).json({ message: "Family member not found" });
        req.user.role = "family";
      } else {
        return res.status(401).json({ message: "Invalid role in token" });
      }

      return next();
    } catch (err) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};
