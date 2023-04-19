const express = require('express');
const mongoDB = require('./db')
const app = express();

const path = require('path')

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
       "Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

//static files
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, "../build/index.html"))
})

app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.use(express.json())
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"))
app.use("/api", require("./Routes/OrderData"));

app.listen(5000, ()=>{
  console.log("server is running")
})

