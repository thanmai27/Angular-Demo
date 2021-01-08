const express = require('express');
var router = express.Router();
var ObjectId= require('mongoose').Types.ObjectId;

var {Supervisor} = require('../model/supervisor');

router.get('/' , async(req,res) =>
{
    try
    {
        await Supervisor.find( (err,docs) =>
        {
            if(!err)
            {
                res.send(docs);
            }
       })
    }
    catch(error)
    {
        console.log(error.message)
    }

})

router.post('/',(req,res) =>
{
    var spr = new Supervisor(
        {
            sp_Name : req.body.sp_Name,
           sp_password : req.body.sp_password 
        }
    );

    spr.save((err,docs) =>
    {
        if(!err)
        {
            res.send(docs);
            console.log(docs);

        }
        else
        {
            console.log("Error is posting " + JSON.stringify(err));
        }
    })   
})

module.exports =router;
