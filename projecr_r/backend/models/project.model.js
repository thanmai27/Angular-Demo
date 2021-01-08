const mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    user_id: {
        type: String
    },
    units: {
        type: String,
        required: 'Units can\'t be empty',
    },
    area: {
        type: Number,
        required: 'Area can\'t be empty',
        minlength: [10, 'Area Must be 100 SQft']
    },
    projectname: { type: String },
    location: { type: String },
    floor: { type: String }
});


module.exports = mongoose.model('Project', projectSchema);