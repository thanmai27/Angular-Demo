const express =  require('express');

const router = express.Router();

const {thanmay} =  require('../model/mymodel');

try
{
    thanmay.bulkWrite(
        [
            /*{ insertOne :{"document" :
                   {
                      "syncid" : 4, "fname" : "Dithras", "lname" : "barbarian"
                   }
                }
             }
             { updateOne : {
                "filter" : { "syncid" :4  },
                "update" : { $set : { "lname" : "kbjfusdfid"} }
             } },
    */
             { updateMany :
                {
                   "filter" : { "syncid" : { $lt : 4,$gt:1} },
                   "update" : { $set : { "lname" : "shdsdvsdsd"} }
                },
    
             }
        ]
    )
    
}
catch(error)
{
console.log(error);
}

router.get('/data',(req,res)=>
{
 thanmay.find((err,doc)=>
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

router.post('/data',(req,res)=>
{

    
    let t = new thanmay (
        {
            syncid:req.body.syncid,
            fname:req.body.fname,
            lname:req.body.lname
        }
    );

    
    t.save((err,doc) =>
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


module.exports = router;
