/**
 * Created by Dilshan on 7/27/2017.
 */

var express = require('express');
var bodyParser = require('body-parser');

//All DTO
var UserDTO = require('../dto/UserDTO');

//All BOs
var UserBO = require('../business/UserBO');

var routingHandler = express.Router();

routingHandler.use(bodyParser.json());
routingHandler.use(bodyParser.urlencoded({extended:true}));

routingHandler.all("/:service/:serviceType",function (req, res) {
    switch (req.params.service){
        case "user":
            switch (req.params.serviceType){
                case "add":
                    var user = new UserDTO(
                        req.body.txtUserName,
                        req.body.txtEmail,
                        req.body.txtpwd
                    );
                    UserBO.addUser(user, function (result) {
                        if (result){
                            console.log("All done Service Factory");
                            res.send({result:"success"});
                        }else{
                            res.send({result:"faild"});
                        }
                    });
                    break;
                case "update":
                    break;
                case "delete":
                    break;
            }

            break;
        case "others":
            break;
        default:
            break;
    }
});

module.exports=routingHandler;