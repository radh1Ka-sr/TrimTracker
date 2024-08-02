// models/index.js

const User = require("./user");
const Saloon = require("./saloon");
const Appointment = require("./appointment");
const DeletedAppointment = require("./deletedAppointment");

module.exports = { User, Saloon, Appointment, DeletedAppointment };
