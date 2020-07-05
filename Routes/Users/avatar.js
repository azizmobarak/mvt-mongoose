const jwt = require('jsonwebtoken');
const Users = require('../../Models/users');


const keepAvatar = (req, res) => {
    try {
        console.log(req.headers.authorization);
        //console.log(req.body.file);
        console.log(req.file);
        const file = req.file
        if (!file) {
            res.status(400).json({ error: "error" })
        } else {
            jwt.verify(req.headers.authorization, 'loginautho', (error, decode) => {
                if (error) res.status(400).json({ error: "Not Authorized" });
                else {
                    var link = req.file.filename;
                    console.log("link : " + link)
                    Users.updateOne({ ID: decode }, { Avatar: link }, (error, doc) => {
                        if (error) res.status(400).json({ error: "Not updated" });
                        else {
                            res.json({ file: file })
                        }
                    });
                }
            })
        }

    } catch (e) {
        console.log(e);
    }
}

module.exports = keepAvatar;