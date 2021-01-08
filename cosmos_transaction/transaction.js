const mongoose = require('mongoose');
const trans = require('./index');

console.log("Transfering amount...")
try 
{
     trans.transfer('A', 'B', 2)
}
catch (error) 
{
 console.log(error.message);
}
