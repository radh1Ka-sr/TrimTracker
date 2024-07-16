const mongoose = require("mongoose");
const { Schema } = mongoose; // Destructure Schema from mongoose

// Define mongoose schemas
const UserSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String, required: true },
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment',
    }],
    services: [{
        type: String,
    }],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;