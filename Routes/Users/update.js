const Users = require('../../Models/users');
const jwt = require('jsonwebtoken');
const { update } = require('../../Models/users');


const updateUser = (req, res) => {
    var secret = req.headers.authorization;
    var newname = req.body.name;
    jwt.verify(secret, 'loginautho', (error, decode) => {
        if (error) res.send('Not Authorized');
        else {
            console.log(decode);
            Users.updateOne({ ID: "123456899" }, { Username: newname }, (error, doc) => {
                if (error) res.send("Not deleted");
                else {
                    res.send(doc)
                }
            });
        }
    })
}

module.exports = updateUser;