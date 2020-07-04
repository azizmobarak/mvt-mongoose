const jwt = require('jsonwebtoken');
const Request = require("../../Models/requests");
const Joi = require('@hapi/joi');

const newRequest = (req, res) => {
    var secret = req.headers.authorization;
    var Username = req.body.username;
    var Userid = req.body.userid;
    var Locationid = req.body.locationid;
    var Locationname = req.body.locationname;

    const ReqSchema = Joi.object({
        User: {
            ID: Joi.string().required(),
            Username: Joi.string().required()
        },
        Location: {
            ID: Joi.string().required(),
            Name: Joi.string().required()
        }
    });

    const ShemaBody = {
        User: {
            ID: Userid,
            Username: Username,
        },
        Location: {
            ID: Locationid,
            Name: Locationname
        }
    };


    jwt.verify(secret, "loginautho", (error, decode) => {
        if (error) res.send("Not Authorized");
        else {
            try {
                var resulte = ReqSchema.validate(ShemaBody).error.details[0].message;
                res.json(resulte);
            } catch {
                const Requesttosave = new Request(ShemaBody);
                Requesttosave.save((error, doc) => {
                    if (error) res.json(error);
                    else {
                        res.json(doc);
                    }
                });

            }
        }
    })

}

module.exports = newRequest;