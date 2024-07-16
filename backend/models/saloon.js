const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define mongoose schemas
const SaloonSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    saloonName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    services: [{
        type: String,
    }],
    prices: [{
        type: Number,
        // required: true
    }],
    averageTimes: [{
        type: Number, // Average time in minutes
        // required: true
    }],
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment',
    }],
});

const Saloon = mongoose.model("Saloon", SaloonSchema);
module.exports = Saloon;