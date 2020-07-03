const express = require('express');
const app = express();
const route = express.Router();
const User = require('../../Models/users');
const jwt = require('jsonwebtoken');

route.get("/users/:username/:password", (req, res) => {

    try {
        User.find({ Username: req.params.username }, 'ID Password', (err, doc) => {
            if (err) console.log(err);

            try {
                if (doc[0].Password === req.params.password) {
                    jwt.sign(doc[0].ID, 'loginautho', (error, token) => {
                        if (error) console.log(error);
                        console.log(token);
                        console.log("found")
                        try {
                            res.send(token);
                        } catch (e) { console.log(e) }
                    })
                }
            } catch {
                res.status(404)
                    .send("not found")
            }
        });
    } catch {
        res.status(400)
            .send('not found')
    }
});

module.exports = route;