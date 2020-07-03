const express = require('express');
const app = express();
const route = express.Router();
const cors = require('cors');
const Locations = require('../../Models/locations');
const joi = require('@hapi/joi');
const Users = require('../../Models/users');

app.use(cors());

const newlocation = (req, res) => {

    console.log(req.body);
    Users.find({ ID: "3err3" }, 'Username', (error, doc) => {
        if (error) res = "Error";
        else {
            if (doc.length > 0) {
                res.json(addlocation(req.body, doc[0].Username, "3err3"));
            } else {
                res = "Error"
            }
        }
    });
}


const addlocation = (obj, name, ID) => {
    var result;
    const locationobj = {
            Location: obj,
            User: {
                Name: name,
                ID: ID
            }
        }
        //joi validation object
    const location = joi.object({
        Location: {
            Name: joi.string().min(2),
            City: joi.string().required(),
            Picture: joi.string(),
        },
        User: {
            Name: joi.string(),
            ID: joi.string()
        }
    })

    //object to compare and insert

    try {
        result = location.validate(locationobj).error.details[0].message;
        console.log(result);
        return result;
    } catch {
        const newlocation = new Locations(locationobj);
        newlocation.save();
        return "success";
    }

}

module.exports = newlocation;