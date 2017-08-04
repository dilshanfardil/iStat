var UserDAO = require('../dao/UserDAO');

exports.addUser = function (user,callback) {
    return UserDAO.addUser(user, callback);

}
