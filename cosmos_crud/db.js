const mongoose =  require('mongoose');

mongoose.connect('mongodb://my-cosmos-students:qmPzOIFvtrCooLFbrPSKJklwSeBXzJEqX45a45BSWCdTQENc8zWq67udVO0jJJ126JMCTyD2fAOmxlzrh4b2qg==@my-cosmos-students.documents.azure.com:10255/?ssl=true&replicaSet=globaldb',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=> console.log("Database connected"))
.catch(err=>console.error("could not connected to Database",err));

module.exports = mongoose;