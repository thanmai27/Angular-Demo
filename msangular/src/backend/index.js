require('express-async-errors');
const winston = require('winston');
require('winston-mongodb');
const error = require('./middileware/error');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


winston.add(new winston.transports.File({ filename: 'loggin_error.log' }));
winston.add(new winston.transports.MongoDB({ db: 'mongodb://localhost:27017/GreenMatters' }));
const { mongoose } = require('./db');

var contactController = require('./controllers/contactController');
//var azure = require('./controllers/azureblob');
var userController = require('./controllers/usercontroller');
var projectController = require('./controllers/projectcontroller');


var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/contact', contactController)
    //app.use('/upload', azure)
app.use('/user', userController);
app.use('/project', projectController);

app.use(error);

app.listen(3000, () => console.log('Server started at port : 3000'));
