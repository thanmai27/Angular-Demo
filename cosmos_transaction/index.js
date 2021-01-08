const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

 mongoose.connect('mongodb://my-cosmos-students:qmPzOIFvtrCooLFbrPSKJklwSeBXzJEqX45a45BSWCdTQENc8zWq67udVO0jJJ126JMCTyD2fAOmxlzrh4b2qg==@my-cosmos-students.documents.azure.com:10255/?ssl=true&replicaSet=globaldb',{  replicaSet: 'rs' ,useNewUrlParser: true,useUnifiedTopology: true})
.then(()=> console.log("Database connected"))
.catch(err=>console.error("could not connected to Database",err));

mongoose.connection.dropDatabase();
const Account = mongoose.model('Account', new mongoose.Schema({
  name: String, balance: Number
}));

Account.create([{ name: 'A', balance: 5 }, { name: 'B', balance: 10 }]);



async function transfer(from, to, amount) 
{
    const session =mongoose.startSession();
    (await session).startTransaction();
    try 
    {
      const opts = { session, new: true };

      const A = await Account.findOneAndUpdate({ name: from }, { $inc: { balance: -amount } }, opts);
      if (A.balance < 0) 
      {
        console.log(A.balance);
        throw new Error('Insufficient funds: ' + (A.balance + amount));
      }
  
      const B = await Account.findOneAndUpdate({ name: to }, { $inc: { balance: amount } }, opts);
  
      await session.commitTransaction();
      session.endSession();
      return { from: A, to: B };
    } 
    catch (error) 
    {
 
      await session.abortTransaction();
      session.endSession();
      throw error; 
    }
  }

  module.exports = {transfer};