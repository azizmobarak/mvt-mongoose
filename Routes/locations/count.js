const Locations = require('../../Models/locations');



const countlocations = (req, res) => {
    Locations.where({ 'Name': req.params.name }).countDocuments((error, doc) => {
        if (error) console.log(error);
        else {
            res.json({ n: doc })
        }
    })
}
module.exports = countlocations;