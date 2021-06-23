const express = require ("express");
const { join } = require("path");
const app = express ();
const path = require ("path");

app.get("/", (req, res ) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
})

app.get("/babbage", (req,res)=> {
    res.sendFile(path.join(__dirname, "/views/babage.html"));
})
app.get ("/berners", (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/berners.html"));
})
app.get ("/clarke", (req,res)=> {
     res.sendFile(path.join(__dirname,"/views/clarke.html"));
})
app.get ("/hamilton",(req,res)=> {
    res.sendFile(path.join(__dirname,"/views/hamilton.html"));
})
app.get ("/hopper", (req,res)=> {
    res.sendFile(path.join(__dirname,"/views/hopper.html"));
})

app.get("/turing", (req,res)=> {
    res.sendFile(path.join(__dirname,"/views/turing.html"));
})

app.listen ("3030",()=>{
    console.log("Servidor funcionando en el puerto 3030");
})