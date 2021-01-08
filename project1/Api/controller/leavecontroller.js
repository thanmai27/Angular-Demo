const express = require('express');
var router = express.Router();

var {Leave} = require('../model/leave');
var ObjectId = require('mongoose').Types.ObjectId;


router.get('/' , async (req,res) =>
{ try
    {
        await Leave.find( (err,docs) =>
        {
              if(!err)
                {
                    res.send(docs);
        
                }
            })
                
            
    }

        catch(Error)
        {
            console.log(Error);
        }
    
    
})

router.get('/:id' , async(req,res) =>
{
    if(!ObjectId.isValid(req.params.id))
    {
        res.status(400).send(`No match found : ${req.params.id}`);
    }
    try
    {
       await Leave.findById(req.params.id , (err,docs)=>
        {
            if(!err)
            {
                res.send(docs);
    
            }
         
        })
    }
  catch(error)
  {
      console.log(error);
  }
    
})

router.post('/' , async(req,res) =>
{
    try
    {
        var lev = new Leave(
            {
                empName:req.body.empName,
                empId:req.body.empId,
                reasonLeave:req.body.reasonLeave,
                leaveFrom:req.body.  leaveFrom,
                leaveTo:req.body.leaveTo,
                description:req.body.description,
                status:'pending',   
                message:req.body.message   
            }
        );
    
        await lev.save( (err,docs) =>
        {
            if(!err)
            {
                res.send(docs);
    
            }
           
        })

    }
    catch(error)
    {
        console.log(error);
    }
    
})

router.put('/:id' , async(req,res)=>
{
    
    try
    {
        if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`Match not found:${req.params.id}`);

    var lev = {
       
        status:"approved",
        message:"your leave was approved"
     }

        Leave.findOneAndUpdate({_id:req.params.id},{$set:lev},(err,docs)=>
        {
            if(!err)
            {
                res.send(docs);
                console.log(docs);

            }

          

        })

    }
    catch(error)
    {
        console.log(error);
    }
    

})



router.put('/reject/:id' , (req,res)=>
{
    console.log("backend");
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`Match not found:${req.params.id}`);

    var lev = {
       
        status:"Rejected",
        
       
     }

        Leave.findOneAndUpdate({_id:req.params.id},{$set:{status:lev.status}} ,(err,docs)=>
        {
            if(!err)
            {
                res.send(docs);
                console.log(docs);

            }

            else
            {
                console.log("error" +JSON.stringify(err));
            }

        })


})

   
module.exports = router;