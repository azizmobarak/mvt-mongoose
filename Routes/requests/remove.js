const Requests = require('../../Models/requests');
const jwt = require("jsonwebtoken");

const removeRequestsById = (req, res) => {
    reqid = req.params.id;
    var secret = req.headers.authorization;
    jwt.verify(secret, 'loginautho', (error, decode) => {
        if (error) res.send('not authorized');
        else {
            Requests.deleteOne({ _id: reqid }, (error, doc) => {
                if (error) res.send("empty")
                else {
                    res.send(doc);
                }
            })
        }
    });
}

module.exports = removeRequestsById;