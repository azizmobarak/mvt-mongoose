const Locations = require('../../Models/locations');
const jwt = require('jsonwebtoken');
const removeRequestsById = require('../requests/remove');



const removeLocation = (req, res) => {
    var secret = req.headers.authorization;
    jwt.verify(secret, "loginautho", (error, decode) => {
        if (error) res.send("Not Authorized");
        else {
            console.log(decode)
            Locations.deleteOne({ 'User.ID': decode }, (error, doc) => {
                if (error) res.send("Can't delete the Item")
                else {
                    res.send(doc);
                }
            })
        }
    })
}

module.exports = removeLocation;