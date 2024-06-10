const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const product=require("./models/product")

const app=express()
app.use(cors())

app.post("/",(req,res)=>
{
    res.send("add")
})

app.post("/search",(req,res)=>
{
    res.send("search")
})

app.post("/delete",(req,res)=>
{
    res.send("delete")
})

app.view("/view",(req,res)=>
{
    res.send("view")
})

app.listen(8080,()=>{
    console.log("server starts")
})