
const express = require('express');require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');


//const { mongoose } = require('./db');

const router = require('./router/router')

var app = express();
app.use(bodyParser.json());

const corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOption));
app.use('/',router)

const port = process.env.PORT ;

app.listen(port, () => console.log(`Server running on port ${port}`));

