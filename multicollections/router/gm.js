const express =  require('express');

const router = express.Router();
var ObjectId=  require('mongoose').Types.ObjectId;

const {Gm} =  require('../model/gmmodel');



router.get('/update',(req,res)=>
 {
  
   Gm.bulkWrite(
            [
                
                { updateMany :
                    {
                       "filter" : { resourceGroup:"LOADTEST" },
                       "update" : { $set : { serviceName : "Ram"} }
                    },
        
                 }
            ],(err,doc)=>
            {
                if(err)
                {
                    res.status(400).send(err)
                }
                else
                {
                    res.send(doc)
                }
            })
});


//get 100 record
router.get('/gm',(req,res)=>
{
    //{sycid:{$lte:200}} resourceGroup
  Gm.find({resourceGroup:"LOADTEST"},(err,doc)=>
 {
     if(!err)
     {
        res.send(doc);
     }
     else
     {
         res.send(err);
     }   
       cd
 }).select({resourceGroup:1,_id:0})
})

//updateMAny
router.get('/gm/update',(req,res)=>

{
   

  Gm.updateMany({ resourceGroup:"LOADTEST" } ,{ $set : { serviceName: "Virtual Machine2"} },(err,doc)=>
 {
     if(!err)
     {
        res.send(doc);
     }
     else
     {
         res.send(err);
     }

 })

})

//get record based id sycid
router.get('/gm/:sycid',(req,res)=>
{
    console.log(Gm.modelName);

 Gm.find({sycid : req.params.sycid},(err,doc)=>
    {
   
        if(!err)
        {
           res.send(doc);
        }
        else
        {
            res.status(400).send(err);
            console.log(err)
        }
    }).select({sycid:1,serviceName:1,_id:0}) 

})




module.exports = router;
