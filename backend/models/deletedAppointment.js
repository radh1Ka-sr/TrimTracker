// models/deletedAppointment.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const DeletedAppointmentSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  saloonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Saloon', required: true },
  services: [String],
  totalPrice: Number,
  startTime: Date,
  endTime: Date,
  saloonName: String,
  saloonAddress: String,
  userName: String,
  deletedAt: { type: Date, default: Date.now } // Timestamp when the appointment was deleted
});

const DeletedAppointment = mongoose.model("DeletedAppointment", DeletedAppointmentSchema);
module.exports = DeletedAppointment;
