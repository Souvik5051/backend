require('dotenv').config();

const express=require("express");
const app=express();

const port=4000;
app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.get('/login',(req,res)=>{
    res.send("<h1>please login at souvik.com</h1>");
})

app.get('/youtube',(req,res)=>{
    res.send("<h1>please visit souvik.com</h1>");
})
app.listen(process.env.PORT,()=>{
    console.log(`server started at port ${port}`);
})