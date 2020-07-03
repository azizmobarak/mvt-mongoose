const express = require('express');
const route = express.Router();
const core = require('cors');
const jwt = require('jsonwebtoken');
const Locations = require('../../Models/locations');


route.get('/getlocations/:name', (req, res) => {
    var seceret = req.headers.authorization;
    jwt.verify(seceret, 'loginautho', (error, decode) => {
        if (error) console.log(error);
        try {
            if (decode !== null || decode !== "undefined" || decode !== "") {
                Locations.find({ Name: req.params.name }, 'Name City Picture', (error, doc) => {
                    if (error) console.log(error);
                    if (doc.length > 0) {
                        var tab = [];
                        doc.map(i => {
                            tab.push(i);
                        });
                        res.json(tab);
                    } else {
                        res.status(404)
                            .send("not found")
                    }
                });
            } else {
                res.status(404)
                    .send('not found')
            }
        } catch {
            res.status(404)
                .send('error')
        }
    })

});
module.exports = route;