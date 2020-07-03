const express = require('express');
const route = express.Router();
const core = require('cors');
const jwt = require('jsonwebtoken');
const Locations = require('../../Models/locations');


const locationserach = (req, res) => {
    var seceret = req.headers.authorization;
    jwt.verify(seceret, 'loginautho', (error, decode) => {
        if (error) res.send("Not authorized");
        else {
            try {
                if (decode !== undefined) {
                    Locations.find({ Name: req.params.name }, 'Name City Picture', (error, doc) => {
                        if (error) console.log(error);
                        if (doc.length > 0) {
                            var tab = [];
                            doc.map(i => {
                                tab.push(i);
                            });
                            res.json(tab);
                        } else {
                            res.send("not found");
                        }
                    });
                } else {
                    res.send('Not authorized');
                }
            } catch {
                res.send('error');
            }
        }
    })

}
module.exports = locationserach;