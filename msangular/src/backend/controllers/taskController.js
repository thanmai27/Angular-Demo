const express = require('express');
var router = express.Router();
const Joi = require('joi');
var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../models/user');
var { Project } = require('../models/project');
var { Task } = require('../models/task');
var { Taskchanges } = require('../models/taskchanges');



async function validate_Task(Task) {
    try {
        let task = {

            projectName: Joi.string(),
            teamMember: Joi.string(),
            createdBy:Joi.string(),
            taskStatus: Joi.string(),
            createdOn: Joi.date(),
            assignOn:join.date(),
            startOn: Joi.date(),
            holdOn:Joi.date(),
            endOn: Joi.date(),
            cancelledOn:Joi.date(),
            taskName:Joi.string(),


        }

        return Joi.validate(Task, task);

    } catch (ex) {
        res.status(400).send(ex.message)
    }

}
function checkDate(date1,date2)
{
if(Date.parse(date1)>Date.parse(date2))
{
    console.log("Start Date must be greater than assign Date")

}
}


router.get('/', async(req, res) => {
    await Task.find((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.status(400).send("Cannot get DEatils");

        }
    })


})


router.get('/changes', async(req, res) => {
    await Taskchanges.find((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.status(400).send("Cannot get DEatils");

        }
    }).sort({taskId:-1})


})


router.get('/:id', async(req, res) => {
    await Task.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.status(400).send(req.params.id + " " + " is Invalid Id...")

        }
    })



})

router.get('/changes/:taskId', async(req, res) => {
    await Taskchanges.find({taskId:req.params.taskId}, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.status(400).send(req.params.taskId + " " + " is Invalid Id...")

        }
    })



})



router.post('/', async(req, res) => {

    const { error } = validate_Task(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);

    }


    let task = new Task({
        projectName: req.body.projectName,
        teamMember: req.body.teamMember,
        createdBy: req.body.createdBy,
        modifiedBy:req.body.modifiedBy== undefined||'' ? null :req.body.modifiedBy,
        taskStatus: req.body.taskStatus,
        createdOn: Date.now(),
        assignOn:req.body.assignOn== undefined||'' ? null :req.body.assignOn,
        startOn: req.body.startOn== undefined||'' ? null : req.body.startOn ,
        holdOn: req.body.holdOn== undefined||'' ? null : req.body.holdOn,
        endOn: req.body.endOn== undefined||'' ? null :req.body.endOn ,
        cancelledOn: req.body.cancelledOn== undefined||'' ? null : req.body.cancelledOn,
        taskName:req.body.taskName


    });


    let taskchane = new Taskchanges(
        {
            taskId:task._id,
            state:task.taskStatus,
            Date:Date.now(),
            currentStatus:"NA",
            modifiedBy: "NA",
            modifiedOn:Date.now(),

        }
        


    )

    
    if (!error)
     {
       await task.save();
        res.send(task);
        taskchane.save(); 

    } else 
    {
        res.status(404).send("Failed to send data")
    }


})


// router.post('/', async(req, res) => {

  
// try
// {

//     let task = new Task({
//         projectName: req.body.projectName,
//         teamMember: req.body.teamMember,
//         createdBy: req.body.createdBy,
//         modifiedBy:req.body.modifiedBy== undefined||'' ? null :req.body.modifiedBy,
//         taskStatus: req.body.taskStatus,
//         createdOn: Date.now(),
//         assignOn:req.body.assignOn== undefined||'' ? null :req.body.assignOn,
//         startOn: req.body.startOn== undefined||'' ? null : req.body.startOn ,
//         holdOn: req.body.holdOn== undefined||'' ? null : req.body.holdOn,
//         endOn: req.body.endOn== undefined||'' ? null :req.body.endOn ,
//         cancelledOn: req.body.cancelledOn== undefined||'' ? null : req.body.cancelledOn,
//         taskName:req.body.taskName


//     });


//     let taskchane = new Taskchanges(
//         {
//             taskId:task._id,
//             state:task.taskStatus,
//             Date:Date.now(),
//             currentStatus:"NA",
//             modifiedBy: "NA",
//             modifiedOn:Date.now(),

//         })


//         if(task.taskStatus=="Completed"&&task.assignOn==null&&task.startOn==null)
//             {
//                 res.status(400).send("Start date and Assign date are required")
//             }
//         else if(task.assignOn==null&&task.startOn!=null)
//             {
//                 res.status(400).send("You cannot set start date without Assign date")

//             }
//         else
//             {
//                     await task.save();
//                     res.send(task);
//                     taskchane.save();
//             }
      
      
      
// }
// catch (error) {
//     console.log(error);
// }

    
    
   

    

// })


router.put('/:id', (req, res) => {

    
    try {

        
        let task = {
            projectName: req.body.projectName,
            teamMember: req.body.teamMember,
            createdBy: req.body.createdBy,
            modifiedBy:req.body.modifiedBy,
            taskStatus: req.body.taskStatus,
            assignOn:req.body.assignOn,
            startOn: req.body.startOn== undefined||'' ? null : req.body.startOn ,
            holdOn:req.body.holdOn,
            endOn: req.body.endOn== undefined||'' ? null :req.body.endOn ,
            cancelledOn: req.body.cancelledOn== undefined||'' ? null : req.body.cancelledOn,

            taskName:req.body.taskName


        };

    
        
    let taskchane = new Taskchanges(
        {
            taskId:req.params.id,
            state:task.taskStatus,
            Date:Date.now(),
            currentStatus:"Running",
            modifiedBy: task.modifiedBy,
            modifiedOn:Date.now(),

        } );

       // const { error} =  checkDate(task.assignOn,task.startOn);
      
        if(Date.parse(task.assignOn)>Date.parse(task.startOn))
        {
            console.log("start date must be greater than assign Date")
            res.status(400).send("start date must be greater than assign date")

        }

        else if(Date.parse(task.assignOn)>Date.parse(task.endOn))
        {
            console.log("EndDate must be greater than Assign Date")
            res.status(400).send("end date must be greater than assign date")
        }
        
        else if(Date.parse(task.startOn)>Date.parse(task.endOn))
        {
            console.log("EndDate must be greater than Start Date")
            res.status(400).send("end date must be greater than  start date")
        }
   
        else if(task.assignOn == null&&task.startOn!==null)
        {
            console.log("EndDate must be greater than Start Date")
            res.status(400).send("Start Date is not allowed without Assign Date")
        }
       
        else if(task.assignOn == null&&task.endOn!==null)
        {
            console.log("EndDate must be greater than Start Date")
            res.status(400).send("End Date is not allowed without Assign Date")
        }
        else if(task.startOn == null&&task.endOn!==null)
        {
            console.log("EndDate must be greater than Start Date")
            res.status(400).send("End Date is not allowed without Start Date")
        }

        else
        {
            Task.findByIdAndUpdate(req.params.id, { $set: task }, { new: true })
            .then(result =>
                {
                    res.send(result)
                } )
            .catch(err => res.status(400).send(err))

             taskchane.save();


        }

    // if(!error)
    // {
    //     Task.findByIdAndUpdate(req.params.id, { $set: task }, { new: true })
    //     .then(result =>
    //         {
    //             res.send(result)
    //         } )
    //     .catch(err => res.status(400).send(err))
    // }
   
  
    } catch (error) {
        console.log(error);
    }


});


module.exports = router;