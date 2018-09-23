const express= require("express");
const app=express();   //app is object
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const DB=require("./database");
app.use('/',express.static('public'));
app.post('/data',function (req, res) {
    console.log(typeof(req.body.lat));
    DB.addData(req.body.name,req.body.lat.substr(0,10),req.body.lon.substr(0,10),req.body.item,req.body.pno,req.body.pass,function () {
        res.send({"redirect": true, "redirect_url": "http://localhost:5000/index.html"});
    });
});

app.listen(5000,function () {
    console.log("application running on port 5000");
    DB.connectDB()
})