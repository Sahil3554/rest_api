const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/students",{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false })
.then(()=>{console.log("connected Successfully")})
.catch((err)=>{console.log("Error while Connecting to database"+err)});