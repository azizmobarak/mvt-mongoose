const mongoose = require('mongoose');
const { string } = require('@hapi/joi');


const requestSchema = mongoose.Schema({
    User: {
        ID: String,
        Username: String
    },
    Location: {
        ID: String,
        Name: String
    }
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;