const express = require ("express");
const { join } = require("path");
const app = express ();
const path = require ("path");
const publicPath= path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

app.get("/", (req, res ) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
})


app.listen ("3030",()=>{
    console.log("Servidor funcionando en el puerto 3030");
})
