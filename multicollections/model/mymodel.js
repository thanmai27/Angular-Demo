
const mongoose =  require('mongoose');

const thanmay= mongoose.model('thanmay',
{
    syncid:{type:String,required:true},
    fname:{type:String,required:true},
    lname:{type:String,required:true}
 
})


module.exports = {thanmay}