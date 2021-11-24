const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const loginmw = function (req, res, next) {
    const usermodel = require('../models/usermodel')
    let headerdata = req.headers["x-auth-token"];
    let decoded = jwt.verify(headerdata, "radium")
    //console.log(decoded._id)
    if (headerdata) {
        if (decoded) {
           req.validToken=decoded
           //console.log(req.validToken._id)
            next()
        } else {
            res.status(401).send({ status: false, msg: "Plz provide valid token " })
        }
    } else {
        res.status(400).send({ status: false, msg: "Plz provide valid header" })
    }




}
module.exports.loginmw = loginmw
