const mongoose = require('mongoose');

var Task = mongoose.model('Task', {
    projectName: { type: String },
    teamMember: { type: String },
    taskStatus: { type: String },
    createdOn: { type: Date },
    assignOn:{ type: Date },
    startOn: { type: Date },
    endOn: { type: Date },


});

module.exports = { Task };
