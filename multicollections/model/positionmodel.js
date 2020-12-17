const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema(
{
  position: {type: String, required: true}
});

const Position = mongoose.model('Position',positionSchema );


exports.positionSchema = positionSchema;
exports.Position = Position; 