/**
 * Created by Dilshan on 7/27/2017.
 */

function UserDTO(username, email, pwd) {
    var _username = username;
    var _email = email;
    var _pwd = pwd;

    this.getUserName = function () {
        return _username;
    };
    this.getEmail = function () {
        return _email;
    };
    this.getPwd = function () {
        return _pwd;
    };


    this.setUserName = function (username) {
       console.log("username DTO");
        _username = username;

    };
    this.setEmail = function (email) {
        _email = email;
    };
    this.setPwd = function (pwd) {
        _pwd = pwd;
    };

    //Encrypted pw is store in the database ane we ara acceing the encryppted one so no need to think about the security
    //here

    this.toJson = function () {
        return{
            userame:_username,
            email:_email,
            pwd: _pwd
        };
    };

};

module.exports = UserDTO;