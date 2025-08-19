// utils/linkedEmail.js
import mongoose from "mongoose";
import Link from "../models/Link.js";
import Family from "../models/Family.js";
import Patient from "../models/Patient.js";

/**
 * Returns the linked user's email.
 * - role === "patient"  -> returns linked Family email
 * - role === "family"   -> returns linked Patient email
 */
export const getLinkedEmail = async (userId, role) => {
  try {
    const objectId = new mongoose.Types.ObjectId(userId);
    let link, linkedUserEmail = null;

    if (role === "patient") {
      // patient -> family email
      link = await Link.findOne({ patientId: objectId }).lean();
      if (link) {
        const family = await Family.findById(link.familyId).select("email").lean();
        linkedUserEmail = family?.email || null;
      }
    } else if (role === "family") {
      // family -> patient email
      link = await Link.findOne({ familyId: objectId }).lean();
      if (link) {
        const patient = await Patient.findById(link.patientId).select("email").lean();
        linkedUserEmail = patient?.email || null;
      }
    }

    return linkedUserEmail;
  } catch (err) {
    console.error("getLinkedEmail error:", err.message);
    return null;
  }
};
