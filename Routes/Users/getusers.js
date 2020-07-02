const express = require('express');
const app = express();
const route = express.Router();
const User = require('../../Models/users');
const jwt = require('jsonwebtoken');

route.get("/users/:username", (req, res) => {

    try {
        User.find({ Username: req.params.username }, 'ID Country', (err, doc) => {
            if (err) console.log(err);
            try {
                console.log(doc[0].ID)
                jwt.sign(doc[0].ID, 'loginautho', (error, token) => {
                    if (error) console.log(error);
                    console.log(token);
                    res.json(token);
                })

            } catch {
                res.status(404)
                    .json("not exist")
            }
        });
    } catch {
        res.send("an error detected")
            .statusCode(400);
    }

});

module.exports = route;