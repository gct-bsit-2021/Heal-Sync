import Link from "../models/Link.js";

export const getLinkedUserId = async (userId, role) => {
  let link;
  if (role === "family") {
    link = await Link.findOne({ familyId: userId });
    return link ? link.patientId : null;
  } else if (role === "patient") {
    link = await Link.findOne({ patientId: userId });
    return link ? link.familyId : null;
  }
  return null;
};
