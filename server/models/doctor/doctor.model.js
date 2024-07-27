const mongoose = require('mongoose');

const DoctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    record: {
        type: Object
    },
    specialization: {
        type: [String],
        required: true
    },
    hospitals: {
        type: [String]
    }
});

const DoctorModel = mongoose.model("doctor", DoctorSchema);

module.exports = DoctorModel;