const mongoose =  require('mongoose');

const Customer = mongoose.model('Customer',
{
    name:{type:String,required:true},
    age:{type:Number,required:true}
})

module.exports = {Customer}
