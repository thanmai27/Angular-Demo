const mongoose =  require('mongoose');

const {Position,positionSchema} = require('./positionmodel');


const Employee =  mongoose.model('Employee',
{
    name:{type:String,required:true},
    age:{type:Number,required:true},
    position:{
              type:positionSchema,
              ref:'Position'
             },
    taskName: { type:positionSchema,
        ref:'Position'},
    assignTo:{ type:positionSchema,
        ref:'Position'},
    currentState:{ type:positionSchema,
        ref:'Position'},
    projectName:{ type:positionSchema,
        ref:'Position'},
    createdBy:{ type:positionSchema,
        ref:'Position'},
    createdOn:{ type:positionSchema,
        ref:'Position'}
})
module.exports = {Employee}