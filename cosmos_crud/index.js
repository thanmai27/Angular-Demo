const express =  require('express');
const bodyparser =  require('body-parser');

const logger = require('./middelware/logger');
const db =  require('./db');
const custmerController =  require('./router/customer');

const app =  express();

app.use(bodyparser.json());
app.use(logger);
app.use('/api',custmerController);

const port = process.env.PORT || 3000;


app.get('/', async(req,res) =>
{
     await res.send("<h1>Welcome to Cosmos CRUD</h1>");
})





app.listen(port,()=> console.log(`Port is running on ${port}`));
