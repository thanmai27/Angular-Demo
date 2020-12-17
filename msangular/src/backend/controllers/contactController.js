
require('dotenv').config();
const express = require('express');
var nodemailer = require('nodemailer');
var multer  = require('multer')
//var upload = multer({ dest: 'uploads/' })
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Contact } = require('../models/contact');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
    console.log("fieldname"+ "  "+ file.fieldname)
  }
})

var upload = multer({ storage: storage })

router.post('/',upload.single('attachment'), (req, res) => {
  console.log(req.file)
    var cnt = new Contact(
      {
        type: req.body.type,
        severity:  req.body.severity,
        subject: req.body.subject ,
        description: req.body.description ,
        modeofcontact: req.body.modeofcontact,
        email: req.body.email,
        cc: req.body.cc,
        contact: req.body.contact,
        attachment:''

    });
    cnt.save()
    .then(result=>res.send(result))
    .catch(err=>res.status(400).send(err))

    if(cnt.email !== null)
    {
      var transporter = nodemailer.createTransport({
        // service: "gmail",
         service: 'outlook',
         port: 587,
         auth: {
           user: "******",
           pass: "******"
           // user: process.env.EMAIL,
           // pass: process.env.PASSWORD,
         },
         tls: {
           rejectUnauthorized: false
       }

       });
       var mailOptions = {
         from: '********',
         to:cnt.email,
         subject: 'Sending Email using Node.js',
         html: `<h4>Description :  ${cnt.description}</h4>`,
         attachments: [
        {
           filename: req.file.filename,
            path: req.file.path


        }
]

       }

     transporter.sendMail(mailOptions, function(error, res){
       if (error) {
         console.log(error);
       } else {
         console.log('Email sent: ' + JSON.stringify(res));
       }
     });

    }

    else
    {
      return
    }




});



module.exports = router;
