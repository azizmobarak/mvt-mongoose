const express = require('express');
const app = express();
const route = express.Router();
const cors = require('cors');
const Locations = require('../../Models/locations');
const joi = require('@hapi/joi');

app.use(cors());

route.post('/newlocation', cors(), (req, res) => {
    console.log(req.body);
    res.json(validation(req.body));
});


const validation = (obj, res) => {
    const location = joi.object({
        Name: joi.string().min(2),
        City: joi.string().required(),
        Picture: joi.string()
    })
    var result;
    try {
        result = location.validate(obj).error.details[0].message;
        console.log(result);
        return result;
    } catch {
        const location = new Locations(obj);
        location.save();
        return "success";
    }

}

module.exports = route;