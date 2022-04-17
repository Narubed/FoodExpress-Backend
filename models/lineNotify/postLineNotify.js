const connection = require("../../config/db.js")
var express = require('express');
var request = require('request');
var router = express.Router();
module.exports = postLineNotify = (req, res) => {
    console.log(req.body)
    var token = req.body.token;
    var message = req.body.message;
    request({
        method: 'POST',
        uri: 'https://notify-api.line.me/api/notify/',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        auth: {
            'bearer': token
        },
        form: {
            message: message
        }
    }, (err, httpResponse, body) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                httpResponse: httpResponse,
                body: body
            });
        }
    });
}