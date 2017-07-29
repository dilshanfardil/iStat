/**
 * Created by Dilshan on 7/27/2017.
 */

function StudentDTO(username, email, pwd) {
    var _username = username;
    var _email = email;
    var _pwd = pwd;

    this.getUsername = function () {
        return _username;
    };
    this.setId = function (username) {
        _username = username;
    };

    this.getEmail = function () {
        return _email;
    };
    this.setEmail = function (email) {
        _email = email;
    };

    this.getPwd = function () {
        return _pwd;
    };
    this.setId = function (pwd) {
        _pwd = pwd;
    };

    //Encrypted pw is store in the database ane we ara acceing the encryppted one so no need to think about the security
    //here

    this.toJson = function () {
        return{
            username:_username,
            email:_email,
            pwd: _pwd
        };
    };

};

module.exports = StudentDTO;