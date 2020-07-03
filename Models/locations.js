const mongoose = require('mongoose');

const LocationsSchema = mongoose.Schema({
    Location: {
        Name: String,
        City: String,
        Picture: String,
    },
    User: {
        Name: String,
        ID: String
    }
});

const Locations = mongoose.model('Locations', LocationsSchema);

module.exports = Locations;