const connection = require('./connection')
const express = require("express");
const router  = require('./routes/student')
const app = express();
connection();
app.use(express.json());
app.use(router);
app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(" Server is running on port 3000")
    }
})