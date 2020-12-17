const mongoose =  require('mongoose');

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://gmcosmosmongoapi:4OsLiDoH5l4GlvbZHFo0K2Kq5bUMqI3UY6c68xlEi7kbUfymwYu93FUM5UYZDhuRdJ1YFiUSEjpFjRZZXJYNlA==@gmcosmosmongoapi.mongo.cosmos.azure.com:10255/GM_EA?ssl=true&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@gmcosmosmongoapi@&retrywrites=false',{ useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false })
//mongoose.connect('mongodb://testmongo:ZmS4HWyxOhGApz5HfLnsvIgH0OhNgjQf1w5KMTxsOMEUgKbb0YYGnco3Ntdi57wAzwglrOO2F68AvN6CU7rztA==@testmongo.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@testmongo@',{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false })
.then(()=> console.log("Database connected"))
.catch(err=>console.error("could not connected to Database",err));

module.exports = mongoose;



