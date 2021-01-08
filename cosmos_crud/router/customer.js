const express =  require('express');
const lodash = require('lodash');

const router = express.Router();

const {Customer} =  require('../model/customermodel');

router.get('/customers',(req,res)=>
{
     Customer.find( (err,doc)=>
    {
        if(!err)
        {
            res.status(200).send(doc);
        }
        else
        {
            res.status(404).send("Cannot get DEatils",err);
        }
    })
})

router.post('/customers',async (req,res)=>
{   
    
    let customer = new Customer (lodash.pick(req.body,['name','age']));

   customer.save((err,doc) =>
    {
        if(!err)
        {
            res.status(200).send(doc);
        }
        else
        {
            res.status(404).send("Cannot Post DEatils",err);
            
        }
    })

})

router.delete('/customers/:name',(req,res) =>
{
   var myquary = {name:req.params.name};
   Customer.deleteOne(myquary,(err,doc)=>
   {
    if(!err)
    {
        res.status(200).send(doc);
    }
    else
    {
        res.status(404).send("Cannot delete",err);
    }

   })
})

router.put('/customers/:id',(req,res)=>{
  
   
    var customer =lodash.pick(req.body,['name','age']);

    Customer.findByIdAndUpdate(req.params.id,{$set:customer},{new:true},(err,doc)=>
    {
        if(!err)
        {        
            res.send(doc);
            
        }
        else
        {
            res.status(400).send(req.params.id + " "+ " is Invalid Id...");


        }

    })
    

})


module.exports = router;