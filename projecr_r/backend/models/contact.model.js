const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name can\'t be empty'
    },
    phone: {
        type: Number,
        required: 'Number can\'t be empty',
        minlength: [10, ' Number must be at least 10 digits']
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true,
    },
    location: {
        type: String,
        required: 'Location can\'t be empty'
    }
});

mongoose.model('Contact', contactSchema);