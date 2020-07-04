const express = require('express');
const app = express();
const route = express.Router();
const User = require('../../Models/users');
const jwt = require('jsonwebtoken');

const userlogin = (req, res) => {
    console.log('1')
    try {
        User.find({ Username: req.params.username }, 'ID Password', (err, doc) => {
            if (err) console.log(err);

            try {
                console.log('2')
                if (doc[0].Password === req.params.password) {
                    console.log(doc[0]._id)
                    jwt.sign(doc[0].ID, 'loginautho', (error, token) => {
                        if (error) res.send("Not authorized");
                        else {
                            console.log(token);
                            console.log("found")
                            try {
                                res.send(token);
                            } catch (e) { console.log(e) }
                        }
                    })
                } else {
                    res.status(404)
                        .send("Password or username not correct")
                }
            } catch {
                res.status(404)
                    .send("not found")
            }
        });
    } catch {
        res.status(404)
            .send('not found')
    }
}

module.exports = userlogin;