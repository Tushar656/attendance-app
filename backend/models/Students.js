const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    rollNum: {
        type: String,
        require: true,
        unique: true,
    }
})

module.exports = mongoose.model("Student", StudentSchema);