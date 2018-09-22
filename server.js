const express= require("express");
const bodyParser=require("body-parser");
const app=express();   //app is object
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',express.static('public'));

app.listen(5000,function () {
    console.log("application running on port 5000");
})
