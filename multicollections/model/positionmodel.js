const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema(
{
  position: {type: String},
  taskName: {type: String},
  assignTo:{type: String},
  currentState:{type: String},
  projectName:{type: String},
  createdBy:{type: String},
  createdOn:{type:Date}
});

const Position = mongoose.model('Position',positionSchema );


exports.positionSchema = positionSchema;
exports.Position = Position; 