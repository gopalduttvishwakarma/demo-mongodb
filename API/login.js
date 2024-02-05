const mongoose = require("mongoose");
const User = require("../models/user");

module.exports = (req, res) => {
    const email = req.body.email;
    const pwd = req.body.pwd;

    User.findOne({email: email, pwd: pwd})
    .then((data) => {  
        if (data) {
            res.status(200).send({success: true, message: "User Authenticated"}); 
        }
        else {
            res.status(404).send({success: false, message: "User not Authenticated"}); 
        }
    })
    .catch((error) => { res.status(500).send({success: false, message: "Not valid"}); });
}
   