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
const newrequest = require('./Routes/requests/new');
const showrequests = require('./Routes/requests/show');
const removeRequestsById = require('./Routes/requests/remove');
const removelocation = require('./Routes/locations/remove');
const deleteAccount = require('./Routes/Users/remove');
const updateUser = require('./Routes/Users/update');

//routes url
router.route('/locations/new').post(cors(), newlocation);
router.route('/locations/search/:name').get(cors(), locattionsearch);
router.route("/users/login/:username/:password").get(cors(), userlogin);
router.route("/users/new").post(cors(), adduser);
router.route('/user/search/:username').get(cors(), usersearch);
router.route('/requests/new').post(cors(), newrequest);
router.route('/requests/show').get(cors(), showrequests);
router.route('/requests/remove/:id').get(cors(), removeRequestsById);
router.route('/locations/remove').post(cors(), removelocation);
router.route('/users/remove').post(cors(), deleteAccount);
router.route('/users/update').post(cors(), updateUser);

module.exports = router;