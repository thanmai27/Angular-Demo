const express =  require('express');
const lodash = require('lodash');

const router = express.Router();

const {Position} =  require('../model/positionmodel');

router.get('/position',(req,res)=>
{
    Position.find( (err,doc)=>
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

router.post('/position',async (req,res)=>
{

    let position = new Position (lodash.pick(req.body,['position']));

    position.save((err,doc) =>
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

router.put('/position/:id',(req,res)=>{


    var ps ={
        position:req.body.position
    };

Position.findByIdAndUpdate(req.params.id,{$set:ps},{new:true},(err,doc)=>
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
