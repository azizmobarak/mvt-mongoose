const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

app.use(cors());

//routes directory
const newlocation = require('./Routes/locations/new');
const locattionsearch = require('./Routes/locations/search');
const userlogin = require('./Routes/Users/login');
const adduser = require('./Routes/Users/new');
const usersearch = require('./Routes/Users/search');

//routes url
router.route('/locations/new').post(cors(), newlocation);
router.route('/locations/search/:name').get(cors(), locattionsearch);
router.route("/users/login/:username/:password").get(cors(), userlogin);
router.route("/users/new").post(cors(), adduser);
router.route('/user/search/:username').get(cors(), usersearch);

module.exports = router;