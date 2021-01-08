const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');
const Contact = mongoose.model('Contact');
const Project = mongoose.model('Project');

// User Sign Up APi
module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.password = req.body.password;
    user.save((err, doc) => {

        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['User email/Phone adrress already exist.']);
            else
                return next(err);
        }

    });
}

// Log In Authentication
module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

//User Profile API Get Request
module.exports.userProfile = (req, res, next) => {
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user: _.pick(user, ['fullName', 'email']) });
        }
    );
}


// Contact us formatted
module.exports.contactus = (req, res, next) => {
    var contact = new Contact();
    contact.name = req.body.name;
    contact.phone = req.body.phone;
    contact.email = req.body.email;
    contact.location = req.body.location;
    contact.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Registered User already have submitted request. will get back']);
            else
                return next(err);
        }
    });
}

// Projects
module.exports.project = (req, res, next) => {
    var project = new Project();
    project.units = req.body.units;
    project.area = req.body.area;
    project.projectname = req.body.projectname;
    project.location = req.body.location;
    project.floor = req.body.floor;
    project.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }
    });
}