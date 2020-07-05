const env = require('dotenv').config();
const express = require('express');
const app = express();
const Port = process.env.PORT || 2300;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//parse
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

//for images 
app.use('/uploads', express.static('uploads'))

//for limiting uploaded files
//app.use(express.bodyParser({ limit: '50mb' }));

const routes = require('./app');
app.use('/', routes);


app.get("/", (req, res) => {
    res.sendfile('./html.html');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, (err) => {
    if (err) console.log(err)

    console.log('connected');
});

app.listen(Port, () => {
    console.log('connected in ' + Port)
})