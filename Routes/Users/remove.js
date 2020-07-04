const Users = require('../../Models/users');
const jwt = require('jsonwebtoken');
const { func } = require('@hapi/joi');
const User = require('../../Models/users');



const deleteAccount = (req, res) => {
    var secret = req.headers.authorization;
    jwt.verify(secret, 'loginautho', (error, decode) => {
        if (error) res.send('Not Authorized');
        else {
            console.log(decode);
            User.deleteOne({ ID: decode }, (error, doc) => {
                if (error) res.send("Not deleted");
                else {
                    res.send(doc)
                }
            });
        }
    })
}





module.exports = deleteAccount;