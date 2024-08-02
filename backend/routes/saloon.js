const express = require('express');
const router = express.Router();
//const { User, Saloon, Appointment} = require("../models");
const { User, Saloon, Appointment, DeletedAppointment } = require("../models");
const SECRET = "pratik"
const jwt = require('jsonwebtoken');
const { authenticateJwt } = require('../middleware/auth');
const bcrypt = require('bcrypt');

// Signup
router.post('/signup', async (req, res) => {
  const { name, email, password, saloonName, imageAddress, services, prices, averageTimes, address, user } = req.body;
  const saloon = await Saloon.findOne({ email });
  if (saloon) {
    res.status(403).json({ message: 'Saloon already exists' });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newSaloon = new Saloon({ name, email, password: hashedPassword, saloonName, imageAddress, services, prices, averageTimes, address, user });
    await newSaloon.save();
    const token = jwt.sign({ email, role: 'saloon' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'Saloon created successfully', token });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const saloon = await Saloon.findOne({ email });
  if (saloon && await bcrypt.compare(password, saloon.password)) {
    const token = jwt.sign({ saloon: saloon.email }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token, saloon });
  } else {
    res.status(403).json({ message: 'Invalid email or password' });
  }
});

//Home page for saloon
router.get('/', authenticateJwt, async (req, res) => {
  const saloonEmail = req.user.saloon;
  const token = req.headers.authorization.split(' ')[1];

  try {
    // Verify JWT token
    const decoded = jwt.verify(token, SECRET);

    // Find the saloon by email
    const saloon = await Saloon.findOne({ email: saloonEmail });
    if (!saloon) {
      return res.status(404).json({ message: 'Saloon not found' });
    }

    // Fetch appointments based on appointment IDs stored in the saloon schema
    const appointments = await Appointment.find({
      _id: { $in: saloon.appointments }
    });

    res.status(200).json({
      message: 'Success',
      data: appointments
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Delete a User
// router.delete('/:appointmentId', authenticateJwt, async (req, res) => {
//   const { appointmentId } = req.params;

//   try {
//     const appointment = await Appointment.findByIdAndDelete(appointmentId);

//     if (!appointment) {
//       return res.status(404).json({ message: 'Appointment not found' });
//     }

//     res.status(200).json({ message: 'Appointment deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// Delete an Appointment
router.delete('/:appointmentId', authenticateJwt, async (req, res) => {
  const { appointmentId } = req.params;

  try {
    const appointment = await Appointment.findById(appointmentId);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Save the appointment to DeletedAppointment schema
    const deletedAppointment = new DeletedAppointment({
      userId: appointment.userId,
      saloonId: appointment.saloonId,
      services: appointment.services,
      totalPrice: appointment.totalPrice,
      startTime: appointment.startTime,
      endTime: appointment.endTime,
      saloonName: appointment.saloonName,
      saloonAddress: appointment.saloonAddress,
      userName: appointment.userName
    });
    await deletedAppointment.save();

    // Delete the appointment from Appointment schema
    await Appointment.findByIdAndDelete(appointmentId);

    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Fetch Deleted Appointments
router.get('/deleted-appointments', authenticateJwt, async (req, res) => {
  const saloonEmail = req.user.saloon;

  try {
    const saloon = await Saloon.findOne({ email: saloonEmail });

    if (!saloon) {
      return res.status(404).json({ message: 'Saloon not found' });
    }

    const deletedAppointments = await DeletedAppointment.find({ saloonId: saloon._id });

    res.status(200).json({
      message: 'Success',
      data: deletedAppointments
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

  module.exports = router;