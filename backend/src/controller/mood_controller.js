import Moodlog from "../models/Moodlog.js";

// Add mood entry
export const addMoodEntry = async (req, res) => {
  const { patientEmail, mood, notes } = req.body;

  if (!patientEmail || !mood) {
    return res.status(400).json({ message: "Email and mood are required" });
  }

  try {
    const newEntry = new Moodlog({
      patientEmail,
      mood,
      notes,
    });

    await newEntry.save();

    res.status(201).json({ message: "Mood entry added", data: newEntry });
  } catch (error) {
    console.error("AddMoodEntry error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Optionally, get mood entries by patient email
export const getMoodEntriesByPatient = async (req, res) => {
  const { patientEmail } = req.params;
  console.log("Fetching moods for email:", patientEmail);  
  try {
    const entries = await Moodlog.find({ patientEmail }).sort({ createdAt: -1 });
    res.json(entries);
  } catch (error) {
    console.error("GetMoodEntries error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
