const mongoose = require('mongoose');

var User = mongoose.model('User', {
    role: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    phone: { type: Number },
    gender: { type: String },
    isactive: { type: Number },
    ismap: { type: Number },


});

module.exports = { User };