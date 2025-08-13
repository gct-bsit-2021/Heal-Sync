import Calender from "../models/Calender.js";

// @desc    Add a new appointment
// @route   POST /api/calender
// @access  Private
export const addAppointment = async (req, res) => {
  try {
    const { title, patientName, date, time } = req.body;

    if (!title || !patientName || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const appointment = await Calender.create({
      title,
      patientName,
      date,
      time,
      createdBy: req.user._id
    });

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all appointments
// @route   GET /api/calender
// @access  Private
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Calender.find().sort({ date: 1, time: 1 });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete an appointment
// @route   DELETE /api/calender/:id
// @access  Private
export const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Calender.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    await appointment.deleteOne();
    res.status(200).json({ message: "Appointment deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
