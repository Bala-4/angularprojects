var express=require("express");
var bodyparser=require("body-parser");
var app=express(); //used to configure ever actions for the server
app.use(bodyparser.json()); //to parse the json data coming from client
app.use(bodyparser.urlencoded({extended:true})); //to parse the urlencoded data coming from client

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    next();
});
//The use of the above piece of code is because the frontend runs in 4200 & backend runs in 9095...
//If we wanted to connect them both,we have to include the above use()
//If we dont use ,we get a CORS exception
var productapi=require("./src/productapi.js");
app.use("/api/products",productapi);
app.listen(9095);
console.log("server up and running on port 9095");