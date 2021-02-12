const mongoose =  require('mongoose');

mongoose.Promise = global.Promise;


// mongoose.connect('mongodb://gmcosmosmongoapi:4OsLiDoH5l4GlvbZHFo0K2Kq5bUMqI3UY6c68xlEi7kbUfymwYu93FUM5UYZDhuRdJ1YFiUSEjpFjRZZXJYNlA==@gmcosmosmongoapi.mongo.cosmos.azure.com:10255/GM_EA?ssl=true&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@gmcosmosmongoapi@&retrywrites=false',{ useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false })
// //mongoose.connect('mongodb://testmongo:ZmS4HWyxOhGApz5HfLnsvIgH0OhNgjQf1w5KMTxsOMEUgKbb0YYGnco3Ntdi57wAzwglrOO2F68AvN6CU7rztA==@testmongo.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@testmongo@',{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false })
// .then(()=> console.log("Database connected"))
// .catch(err=>console.error("could not connected to Database",err));




mongoose.connect('mongodb://localhost:27017/GreenMatters',{ useNewUrlParser: true,useUnifiedTopology: true }, (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;




