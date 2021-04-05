const express = require('express');
const app = express();
require('./conn/connection');
const StudentsRouter = require('./router/students')
const student = require("./models/student");
const port = process.env.port || 8000;
app.use(express.json());
app.use(StudentsRouter);
app.listen(port,()=>{
    console.log(`Sever is Running at port : ${port}`);
});