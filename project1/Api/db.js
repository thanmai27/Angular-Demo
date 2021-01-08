const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Company' ,{ useNewUrlParser: true,useUnifiedTopology: true} , (err) =>
{
    if(!err)
    {
        console.log("......Database has connected now.....")
    }
    else
    {
        console.log(".....No Database is created.....")
    }
});

module.exports = mongoose;