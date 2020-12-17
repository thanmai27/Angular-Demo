const mongoose =  require('mongoose');

const {Position,positionSchema} = require('./positionmodel');


const Employee =  mongoose.model('Employee',
{
    name:{type:String,required:true},
    age:{type:Number,required:true},
    position:{
              type:positionSchema,
              ref:'Position'
             }
})
module.exports = {Employee}