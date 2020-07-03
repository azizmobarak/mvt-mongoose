const env = require('dotenv').config();
const express = require('express');
const app = express();
const Port = process.env.PORT || 2300;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//parse
app.use(bodyParser.json());
//Routes
//users
const AddUsers = require('./Routes/Users/addusers');
app.use('/api', AddUsers);
const GetUsers = require('./Routes/Users/getusers');
app.use('/api', GetUsers);
const Searchuser = require('./Routes/Users/search');
app.use('/api', Searchuser);
//locations
const Addlocations = require('./Routes/locations/addlocations');
app.use('/api', Addlocations);
const Getlocations = require('./Routes/locations/getlocation');
app.use('/api', Getlocations);



mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, (err) => {
    if (err) console.log(err)

    console.log('connected');
});

app.listen(Port, () => {
    console.log('connected in ' + Port)
})