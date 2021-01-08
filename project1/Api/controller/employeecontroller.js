const express = require('express');
var router = express.Router();
var ObjectId= require('mongoose').Types.ObjectId;
var bcrypt = require('bcrypt');
const createError = require('http-errors');


var {Employee} = require('../model/employee');

router.get('/' , async(req,res) =>
{
    try
    {
        await Employee.find( (err,docs) =>
        {
            if(!err)
            {
                res.send(docs);
      
            }
        
        })
    }
    catch(error)
    {
        console.log(error.message);
    }

})

router.get('/:id' , async(req,res) =>
{
    if(!ObjectId.isValid(req.params.id))
    {
      return res.status(400).send(`No record found with that id:${req.params.id}`);
    }
    try
    {
        await Employee.findById(req.params.id , (err,docs)=>
        {
            if(!err)
            {
                res.send(docs);
            }
        })

    }
    
    catch(error)
    {
        console.log(error.message);
        
    }

    
})


router.post('/', async(req,res,next)=>
{
    try
    {
        const emp= new Employee(req.body);
        const result = await emp.save();
        res.send(result);
    }
    catch(error)
    {
        console.log(error.message);
    }
})

router.put('/:id' , async (req,res) =>
{
    try
    {
        if(!ObjectId.isValid(req.params.id))
        {
          return res.status(400).send(`No record found with that id:${req.params.id}`);
        }
        var emp = {   
            empName : req.body.empName,
            empId:req.body.empId,
            passWord : req.body.passWord,}
          await Employee.findByIdAndUpdate(req.params.id ,{$set:emp}, {new:true}, (err,docs)=>
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
        console.log(error.message)
    }
       
})


router.delete('/:id', async(req,res) =>
{
     try
    {
        if(!ObjectId.isValid(req.params.id))
        {
            res.status(400).send(`No match found:${req.params.id}`);
        }

        await Employee.findByIdAndRemove(req.params.id , (err,docs) =>
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
        console.log(error.message)
    }
   
  
})

module.exports = router ;