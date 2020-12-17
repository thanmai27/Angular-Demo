
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db');

var contactController = require('./controllers/contactController');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/contact', contactController)
app.use((req,res,next)=>
{
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
})

app.use((err,req,res,next)=>
{
  res.status(err.status || 500);
  res.json(
    {
      message:err.message
    }
  )
})
app.listen(3000, () => console.log('Server started at port : 3000'));


