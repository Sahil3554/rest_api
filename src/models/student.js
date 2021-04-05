const mongoose = require('mongoose');
const validator = require('validator');
const studentSchema = mongoose.Schema({
    name: String,
    phone: {
        type: Number,
        min: 10,
        required: true
    },
    country: String
});
const Student = mongoose.model("Student",studentSchema);
module.exports = Student;