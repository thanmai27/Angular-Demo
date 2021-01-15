const mongoose = require('mongoose');

var Task = mongoose.model('Task', {
    projectName: { type: String },
    teamMember: [String],
    taskStatus: { type: String },
    startOn: { type: Date },
    endOn: { type: Date },


});

module.exports = { Task };
