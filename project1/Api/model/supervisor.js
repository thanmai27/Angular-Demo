const mongoose = require('mongoose');

var Supervisor = mongoose.model('Supervisor',
{
    sp_Name:{type:String},
    sp_password:{type:String},
    

});

module.exports = {Supervisor};