const express = require('express');
const app = express();
const route = express.Router();
const joi = require('@hapi/joi');
const User = require('../../Models/users');
const cors = require('cors');

//use cors
app.use(cors());

const adduser = (req, res) => {
    const user = joi.object({
        ID: joi.string().required(),
        Username: joi.string().min(4),
        Password: joi.string().min(10).max(50),
        Country: joi.string().required(),
        Avatar: joi.string()
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

}

module.exports = adduser;