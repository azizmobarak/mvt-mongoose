const app = require('express');
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    ID: String,
    Username: String,
    Password: String,
    Country: String,
    Avatar: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;