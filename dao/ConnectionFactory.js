/**
 * Created by Dilshan on 7/27/2017.
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'iStat'
});

connection.connect(function (err) {
    if(err){
        console.log(err.message);
        return;
    }
    console.log("Connection has been successfully established...");
});

exports.getConnection = function () {
    return connection;
}