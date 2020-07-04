const Requests = require('../../Models/requests');
const jwt = require("jsonwebtoken");

const showRequestsById = (req, res) => {
    var secret = req.headers.authorization;
    jwt.verify(secret, 'loginautho', (error, decode) => {
        if (error) res.send('not authorized');
        else {
            Requests.find({ User: { ID: decode } }, (error, doc) => {
                if (error) res.send("empty")
                else {
                    res.send(doc)
                }
            })
        }
    });
}

module.exports = showRequestsById;