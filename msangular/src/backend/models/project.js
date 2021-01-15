const mongoose = require('mongoose');

var Project = mongoose.model('Project', {
    projectName: { type: String, required: true },
    projectState: { type: String },
    projectLead: { type: String },
    createdOn: { type: Date, default: Date.now },
    selectDate: { type: Date, default: Date.now },
    projectMembers: [String],
    ismap: { type: Number }

});

module.exports = { Project };
