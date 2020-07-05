const jwt = require('jsonwebtoken');
const Users = require('../../Models/users');


const showAvatar = (req, res) => {
    var name = req.params.name;
    res.sendfile('uploads/' + name);
}

module.exports = showAvatar;