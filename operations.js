var database =require('./database');

function add(connection,name,lat,lon,item,pno,pass,cb){
    var sql=`INSERT INTO seller VALUES ('${name}','${lat}','${lon}','${item}','${pno}','${pass}')`;

    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        cb(results);
    });
}
/*
function set(connection,lat,lon,val,cb){
    console.log(val);
    var sql=`SELECT * FROM worker WHERE pro='${val}'`;

    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        cb(results);
    });

}
*/
module.exports={
    add
}
