const express = require('express');
var router = express.Router();
const Joi = require('joi');
var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../models/user');
var { Project } = require('../models/project');


let user;
async function validate_Project(Project) {
    try {
        let project = {

            projectName: Joi.string().required(),
            projectState: Joi.string().required(),
            projectLead: Joi.string().required(),
            createdOn: Joi.date(),
            selectDate: Joi.date(),
            projectMembers: Joi.array(),
            ismap: Joi.number()


        }

        return Joi.validate(Project, project);

    } catch (ex) {
        res.status(400).send(ex.message)
    }

}


router.post('/', async(req, res) => {
    const { error } = validate_Project(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);

    }

    let project = await Project.findOne({ projectName: req.body.projectName });
    //let choose = await Project.find({ ismap: 1, projectState: 'stared' })
    if (project) {
        return res.status(400).send("Project is already exist");
    }



    project = new Project({
        projectName: req.body.projectName,
        projectState: "created",
        projectLead: req.body.projectLead == undefined || '' ? null : req.body.projectLead,
        createdOn: Date.now(),
        selectDate: Date.now(),
        projectMembers: req.body.projectMembers,
        ismap: 0


    });

    if (!error) {
        await project.save();
    }

    res.send(project);

})


router.get('/', async(req, res) => {
    await Project.find((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.status(400).send("Cannot get DEatils");

        }
    })


})

router.get('/ismap', async(req, res) => {


    let users = await User.find({ role: 'Team Lead' }, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.status(400).send("Cannot get DEatils");

        }

        console.log(users);
    })


})

router.get('/:id', async(req, res) => {
    await Project.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.status(400).send(req.params.id + " " + " is Invalid Id...")

        }
    })



})




router.put('/:id', (req, res) => {

    try {

        let project = {
            projectName: req.body.projectName,
            projectState: req.body.projectState,
            selectDate: Date.now(),
            projectLead: req.body.projectLead,
            projectMembers: req.body.projectMembers,
        };


        Project.findByIdAndUpdate(req.params.id, { $set: project }, { new: true })
            .then(result => res.send(result))
            .catch(err => res.status(400).send(err))
    } catch (error) {
        console.log(error);
    }


});


router.put('/ismap/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Match not found:${req.params.id}`);


    var user = {

        ismap: 1,
        selectDate: Date.now()

    }

    Project.findByIdAndUpdate({ _id: req.params.id }, { $set: { ismap: user.ismap } }, (err, docs) => {
        if (!err) {
            res.send(docs);
            console.log(docs);

        } else {
            console.log("error" + JSON.stringify(err));
        }

    })

})

router.put('/isunmap/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Match not found:${req.params.id}`);


    var user = {

        ismap: 0,
        selectDate: Date.now()


    }

    Project.findByIdAndUpdate({ _id: req.params.id }, { $set: { ismap: user.ismap } }, (err, docs) => {
        if (!err) {
            res.send(docs);
            console.log(docs);

        } else {
            console.log("error" + JSON.stringify(err));
        }

    })


})
module.exports = router;
