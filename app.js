const express = require ("express");
const { join } = require("path");
const app = express ();
const path = require ("path");
const publicPath = path.join(__dirname, 'public');


// carpeta public
app.use(express.static(publicPath));

// home 
app.get("/home", (req, res ) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
})

// detalle de producto
app.get("/detalle-de-producto", (req, res ) => {
    res.sendFile(path.join(__dirname, "/views/detalle-producto.html"));
})

// carrito de compras 
app.get("/carrito-de-compras", (req, res ) => {
    res.sendFile(path.join(__dirname, "/views/carrito-compra.html"));
})

//formulario de registro
app.get("/formulario-de-registro", (req, res ) => {
    res.sendFile(path.join(__dirname, "/views/formulario-registro.html"));
})

//formulario de login 
app.get("/formulario-de-login", (req, res ) => {
    res.sendFile(path.join(__dirname, "/views/formulario-login.html"));
})

//conexion al servidor
app.listen ("3030",()=>{
    console.log("Servidor funcionando en el puerto 3030");
})
