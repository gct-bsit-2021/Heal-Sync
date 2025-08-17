// utils/linkedid.js
import Link from "../models/Link.js";
import Family from "../models/Family.js";
import Patient from "../models/Patient.js";
import mongoose from "mongoose";

export const getLinkedUserId = async (userId, role) => {
  try {
    const objectId = new mongoose.Types.ObjectId(userId);

    console.log("🔍 Checking link for:", objectId.toString(), "Role:", role);

    let link, linkedUser = null;

    if (role === "family") {
      link = await Link.findOne({ familyId: objectId });
      if (link) {
        linkedUser = await Patient.findById(link.patientId).select("-password");
      }
    } else if (role === "patient") {
      link = await Link.findOne({ patientId: objectId });
      if (link) {
        linkedUser = await Family.findById(link.familyId).select("-password");
      }
    }

    console.log("✅ Linked user found:", linkedUser);
    return linkedUser;
  } catch (err) {
    console.error("getLinkedUserId error:", err.message);
    return null;
  }
};
