const express = require('express');
var router = express.Router();
const Joi = require('joi');
var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../models/user');


async function validate_User(User) {
    try {
        let user = {

            role: Joi.string().required(),
            email: Joi.string().max(30).email().required(),
            name: Joi.string().min(3).max(20).required(),
            phone: Joi.number().min(10),
            gender: Joi.string(),
            isactive: Joi.number(),

        }

        return Joi.validate(User, user);

    } catch (ex) {
        res.status(400).send(ex.message)
    }

}


router.post('/', async(req, res) => {
        const { error } = validate_User(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);

        }

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            res.status(400).send('Email is already exist');
        }


        user = new User({
            role: req.body.role,
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone == undefined ? null : req.body.phone,
            gender: req.body.gender == undefined ? null : req.body.gender,
            isactive: 1,


        });

        if (!error) {
            await user.save();
        }

        res.send(user);

    })
    // router.post('/' , async(req,res) =>
    // {
    //     try
    //     //     {
    // let user = User.findOne({ email: req.body.email });
    // if (user) {
    //     res.status(400).send('Email is already exist');
    // }

//         var user = new User(
//             {
//               role: req.body.role,
//               email: req.body. email,
//               name: req.body.name,
//               phone:req.body. phone,
//               gender:req.body.gender

//             }
//         );

//         await user.save()
//         .then(result=>res.send(result))
//         .catch(err=>res.status(400).send(err))

//     }
//     catch(error)
//     {
//         console.log(error);
//     }

// })

router.get('/', async(req, res) => {
    await User.find((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.status(400).send("Cannot get DEatils");

        }
    })


})

router.get('/teamlead', async(req, res) => {
    await User.find({ 'role': 'Team Lead' }, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.status(400).send("Cannot get DEatils");

        }
    })


})
router.get('/member', async(req, res) => {
    await User.find({ 'role': 'Member' }, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.status(400).send("Cannot get DEatils");

        }
    })


})
router.get('/:id', async(req, res) => {
    await User.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.status(400).send(req.params.id + " " + " is Invalid Id...")

        }
    })



})



router.put('/disable/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Match not found:${req.params.id}`);

    var user = {

        isactive: 0,


    }

    User.findOneAndUpdate({ _id: req.params.id }, { $set: { isactive: user.isactive } }, (err, docs) => {
        if (!err) {
            res.send(docs);
            console.log(docs);

        } else {
            console.log("error" + JSON.stringify(err));
        }

    })


})



router.put('/enable/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Match not found:${req.params.id}`);

    var user = {

        isactive: 1,


    }

    User.findOneAndUpdate({ _id: req.params.id }, { $set: { isactive: user.isactive } }, (err, docs) => {
        if (!err) {
            res.send(docs);
            console.log(docs);

        } else {
            console.log("error" + JSON.stringify(err));
        }

    })


})
router.put('/:id', (req, res) => {

    try {
        var user = {
            role: req.body.role,
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            gender: req.body.gender
        };
        User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true })
            .then(result => res.send(result))
            .catch(err => res.status(400).send(err))
    } catch (error) {
        console.log(error);
    }

});

module.exports = router;