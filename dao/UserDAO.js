/** Created by Dilshan on 7/27/2017. */

var connectionFactory = require('./connectionFactory');
var mysql = require('mysql');

exports.addUser = function (user, callback) {

    var connection = connectionFactory.getConnection();
    var sql = "INSERT INTO logindetails VALUES(?,?,?)";
    var params = [
        user.getUserName(),
        user.getEmail(),
        user.getPwd()
    ];

    console.log("DAO Layer in" + user.getUserName());

    sql = mysql.format(sql, params);
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log(err.message);
            callback(false);
        }
        console.log(result);
        callback(result.affectedRows > 0);

    });

    console.log(user);

};