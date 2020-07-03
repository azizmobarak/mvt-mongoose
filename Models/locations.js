const mongoose = require('mongoose');

const LocationsSchema = mongoose.Schema({
    Name: String,
    City: String,
    Picture: String
});

const Locations = mongoose.model('Locations', LocationsSchema);

module.exports = Locations;