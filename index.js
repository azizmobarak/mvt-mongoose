const env = require('dotenv').config();
const express = require('express');
const app = express();
const Port = process.env.PORT || 2300;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//parse
app.use(bodyParser.json());

const routes = require('./app');
app.use('/', routes);




mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, (err) => {
    if (err) console.log(err)

    console.log('connected');
});

app.listen(Port, () => {
    console.log('connected in ' + Port)
})