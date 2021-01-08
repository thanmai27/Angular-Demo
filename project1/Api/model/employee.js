const mongoose = require('mongoose');
var bcrypt = require('bcrypt');


var Employee = mongoose.model('Employee',
{
    empName:{type:String},
    empId:{type:Number},
    passWord:{type:String},
    

});

Employee.encryptPassword =  function(passWord)
{
    return bcrypt.hashSync(passWord, bcrypt.genSaltSync(5), null);  
};

Employee.validPassword = function(passWord, hashPassword) {
    return bcrypt.compareSync(passWord, hashPassword);

}
module.exports = {Employee};