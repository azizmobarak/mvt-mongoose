const express = require('express');
const app = express();
const route = express.Router();
const User = require('../../Models/users');
const jwt = require("jsonwebtoken");
const cors = require('cors');

app.use(cors());

route.get('/search/user/:username', cors(), (req, res) => {
    var secret = req.headers.authorization;
    console.log(secret);
    jwt.verify(secret, 'loginautho', (error, decode) => {
        if (error) console.log(error);
        try {
            console.log(decode);
            if (decode !== "undefined") {
                User.find({ Username: req.params.username }, 'Username ID', (error, doc) => {
                    if (error) console.log(error);
                    console.log(doc);
                    if (doc.length > 0) {
                        var tab = [];
                        doc.map(user => {
                            tab.push(user);
                        });
                        res.status(200)
                            .json(tab);
                    } else {
                        res.status(200)
                            .send("empty");
                    }
                })
            } else {
                res.status(404).send("not found")
            }
        } catch {
            res.status(404).send("not found")
        }
    })
});

module.exports = route;