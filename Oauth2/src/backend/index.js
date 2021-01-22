
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const { mongoose } = require('./db');



var app = express();
app.use(bodyParser.json());

const corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));

const port = process.env.PORT ;
app.listen(port, () => console.log(`Server running on port ${port}`));

