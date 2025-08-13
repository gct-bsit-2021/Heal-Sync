// import Link from "../models/Link.js";

// // Create a new link (patient links a family email)
// export const createLink = async (req, res) => {
//   try {
//     const patientEmail = req.user.email; // from auth middleware token
//     const { familyEmail } = req.body;

//     if (!familyEmail) {
//       return res.status(400).json({ message: "familyEmail is required" });
//     }

//     // Check if link already exists
//     const existingLink = await Link.findOne({ patientEmail, familyEmail });
//     if (existingLink) {
//       return res.status(400).json({ message: "Link already exists" });
//     }

//     // Create new link
//     const newLink = new Link({ patientEmail, familyEmail });
//     await newLink.save();

//     res.status(201).json({ message: "Link created successfully", link: newLink });
//   } catch (error) {
//     console.error("Create Link Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get all family emails linked to a patient
// export const getFamilyLinksByPatient = async (req, res) => {
//   try {
//     const { email } = req.params;

//     const links = await Link.find({ patientEmail: email }).select("familyEmail -_id");

//     res.json({ familyEmails: links.map(link => link.familyEmail) });
//   } catch (error) {
//     console.error("Get Family Links Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get all patient emails linked to a family member
// export const getPatientLinksByFamily = async (req, res) => {
//   try {
//     const { email } = req.params;

//     const links = await Link.find({ familyEmail: email }).select("patientEmail -_id");

//     res.json({ patientEmails: links.map(link => link.patientEmail) });
//   } catch (error) {
//     console.error("Get Patient Links Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Delete a link (either patient or family can call this)
// export const deleteLink = async (req, res) => {
//   try {
//     const { patientEmail, familyEmail } = req.body;

//     if (!patientEmail || !familyEmail) {
//       return res.status(400).json({ message: "patientEmail and familyEmail are required" });
//     }

//     const deleted = await Link.findOneAndDelete({ patientEmail, familyEmail });

//     if (!deleted) {
//       return res.status(404).json({ message: "Link not found" });
//     }

//     res.json({ message: "Link deleted successfully" });
//   } catch (error) {
//     console.error("Delete Link Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
