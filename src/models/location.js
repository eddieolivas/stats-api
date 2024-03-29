const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        maxlength: 2
    },
    beds: {
        type:  Number,
        required: true,
        default: 0
    },
    positiveresidents: {
        type: Number,
        required: true,
        default: 0
    },
    admittedcovid: {
        type: Number,
        required: true,
        default: 0
    },
    totalpositiveresidents: {
        type: Number,
        required: true,
        default: 0
    },
    positivestaff: {
        type: Number,
        required: true,
        default: 0
    },
    totalpositivestaff: {
        type: Number,
        required: true,
        default: 0
    },
    symptomsin72hours: {
        type: Number,
        required: true,
        default: 0
    },
    open: {
        type: String,
        required: true
    },
    dateUpdated: {
        type: String,
        required: true
    },
    locationId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;