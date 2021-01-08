const express = require('express');
const bodyPaser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db');
var employeeController = require('./controller/employeecontroller');
var leaveController = require('./controller/leavecontroller');

var supervisorController = require('./controller/supervisorcontroller');



var app = express();
//app.use(cors({origin:'http://localhost:4200'}))
//app.use(cors({origin:'http://127.0.0.1:5500/'}))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

app.use(bodyPaser.json());


 
app.listen(5678,()=> console.log("The server is running at port 5678"));

app.use('/employees', employeeController);
app.use('/leaves', leaveController);
app.use('/supervisors', supervisorController);

