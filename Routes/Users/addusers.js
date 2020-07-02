const express = require('express');
const app = express();
const route = express.Router();
const Users = require('../../Models/users');
const joi = require('@hapi/joi');
const User = require('../../Models/users');
const mongoose = require('mongoose');

route.post("/users", (req, res) => {
    const user = joi.object({
        ID: joi.string().required(),
        Username: joi.string().min(4),
        Password: joi.string().min(10).max(50),
        Country: joi.string().required()
    });
    var result;
    try {
        result = user.validate(req.body).error.details[0].message;
        res.send(result);
    } catch {
        const usertosave = new User(req.body);
        usertosave.save((err) => {
            if (err) console.log('internal error : ' + err);
            res.send('success')
        });

    }
    console.log(result)

});

module.exports = route;