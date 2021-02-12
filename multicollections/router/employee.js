const express =  require('express');
const lodash = require('lodash');

const router = express.Router();

const {Employee} =  require('../model/employeemodel');
const {Position} = require('../model/positionmodel');

const {Gm} =  require('../model/gmmodel');

router.get('/gm',(req,res)=>
{
   
 Gm.find((err,doc)=>
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



router.get('/employees',(req,res)=>
{
 Employee.find((err,doc)=>
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

router.post('/employees',async (req,res)=>
{

    let ps = new Position (
        {   position:req.body.position,
            taskName: req.body.taskName,
            assignTo:req.body.assignTo,
            currentState:req.body.currentState,
            projectName:req.body.projectName,
            createdBy:req.body.createdBy,
            createdOn:req.body.createdOn
        }
    );
    
    let employee = new Employee (
        {
            name:req.body.name,
            age:req.body.age,
            position:ps,
            taskName:ps,
            assignTo:ps,
            currentState:ps,
            projectName:ps,
            createdBy:ps,
            createdOn:ps
        }
    );

    
    employee.save((err,doc) =>
    {
        if(!err)
        {
            ps.save();
            res.status(200).send(doc);

        }
        else
        {
            res.status(404).send(err);

        }
    })

})

/*router.delete('/customers/:name',(req,res) =>
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
*/
router.put('/employees/:id',(req,res)=>{

var ps = {
    position:req.body.position,
    taskName: req.body.taskName,
    assignTo:req.body.assignTo,
    currentState:req.body.currentState,
    projectName:req.body.projectName,
    createdBy:req.body.createdBy,
    createdOn:req.body.createdOn};
console.log(ps)
    var employee ={
        name:req.body.name,
        age:req.body.age,
        position:ps,
        taskName:ps,
        assignTo:ps,
        currentState:ps,
        projectName:ps,
        createdBy:ps,
        createdOn:ps
    };
var c =req.params.id
  Employee.findOneAndUpdate(c,{$set:employee},{new:true},(err,doc)=>
    {
        if(!err)
        {
            Position.findOneAndUpdate(c,{$set:ps},{new:true},(err2,doc2)=>
            {
                if(!err2)
                {
                    console.log(doc2);
                }
            })
            res.send(doc);
        
        }
        else
        {
            res.status(400).send(req.params.id + " "+ " is Invalid Id...");
        }

    })


})



module.exports = router;
