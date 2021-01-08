const mongoose = require('mongoose');

var Leave = mongoose.model('Leave',
{
   empName:{type:String},
   empId:{type:Number},
   reasonLeave:{type:String},
   leaveFrom:{type:Date},
   leaveTo:{type:Date},
   description:{type:String},
   status:{type:String},
   message:{tyep:String},

});

module.exports = {Leave};