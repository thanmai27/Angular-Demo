const express =  require('express');
const bodyparser =  require('body-parser');

const logger = require('./middelware/logger');
const db =  require('./db');
const employeeController =  require('./router/employee');
const positionController =  require('./router/position');
// const thanmaiController =  require('./router/thanmai');
// const gmController =  require('./router/gm');




const app =  express();

app.use(bodyparser.json());
app.use(logger);
app.use('/',employeeController);
app.use('/',positionController);
// app.use('/',thanmaiController);
// app.use('/',gmController);


const port = process.env.PORT || 8000;


app.listen(port,()=> console.log(`Port is running on ${port}`));
