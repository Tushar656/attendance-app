const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
    rollnum: {
        type: String,
        require: true,
    },
    checkIn: {
        type: Date,
    },
    checkOut: {
        type: Date,
    }
}, {timestamps: true})

module.exports = mongoose.model("Attendance", AttendanceSchema);