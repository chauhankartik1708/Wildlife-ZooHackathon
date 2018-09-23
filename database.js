var mysql =require('mysql');
var operations = require('./operations.js');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'messi',
    password : '10',
    database : 'seller'
});
function connectDB() {
    connection.connect();
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });
}
function addData(name,lat,lon,item,pno,pass,cb){
    operations.add(connection,name,lat,lon,item,pno,pass,function (data) {
      cb(data);
    })
}
function sendUser(cb){
operations.set(connection,function (data) {
    cb(data);
})
}
module.exports ={
    connectDB,addData,sendUser,connection
};