const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    saloonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Saloon', required: true },
    services: [String],
    totalPrice: Number,
    startTime: Date,
    endTime: Date,
    saloonName : String,
    saloonAddress : String,
    userName : String
  
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);
module.exports = Appointment;