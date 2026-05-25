var express=require("express");
var bodyparser=require("body-parser");
var app=express(); //used to configure ever actions for the server
app.use(bodyparser.json()); //to parse the json data coming from client
app.use(bodyparser.urlencoded({extended:true})); //to parse the urlencoded data coming from client
var productapi=require("./controllers/product.controller");
app.use("/api/products",productapi);
app.listen(9095);
console.log("server up and running on port 8080");
