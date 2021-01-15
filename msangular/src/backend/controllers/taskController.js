const express = require('express');
var router = express.Router();
const Joi = require('joi');
var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../models/user');
var { Project } = require('../models/project');
var { Task } = require('../models/task');


async function validate_Task(Task) {
    try {
        let task = {

            projectName: Joi.string(),
            teamMember: Joi.array(),
            taskStatus: Joi.string(),
            startOn: Joi.date(),
            endOn: Joi.date(),


        }

        return Joi.validate(Task, task);

    } catch (ex) {
        res.status(400).send(ex.message)
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



router.get('/:id', async(req, res) => {
    await Task.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.status(400).send(req.params.id + " " + " is Invalid Id...")

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
        taskStatus: req.body.taskStatus,
        startOn: req.body.startOn,
        endOn: req.body.endOn,


    });

    if (!error) {
        await task.save();
        console.log(req.body)
        res.send(task);

    } else {
        res.status(404).send("Failed to send data")
    }


})


router.put('/:id', (req, res) => {

    try {



        let task = {
            projectName: req.body.projectName,
            teamMember: req.body.teamMember,
            taskStatus: req.body.taskStatus,
            startOn: req.body.startOn,
            endOn: req.body.endOn,


        };
        Task.findByIdAndUpdate(req.params.id, { $set: task }, { new: true })
            .then(result => res.send(result))
            .catch(err => res.status(400).send(err))
    } catch (error) {
        console.log(error);
    }


});


module.exports = router;