const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');

const static_path = path.join(__dirname,"../public");


app.use(express.static(static_path));


app.get("",(req,res)=>{
    res.send("Welcome to hemant");
})

app.get("/about",(req,res)=>{
    res.send("Welcome to about page");
})

app.get("/weather",(req,res)=>{
    res.send("Welcome to about page");
})

app.get("*",(req,res)=>{
    res.send("This page does not exist");
})
app.listen(port,()=>{
    console.log('listening');
})