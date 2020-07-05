const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

app.use(cors());

//add multer for file upload
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + file.originalname)
    }
})
var upload = multer({ storage: storage })

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
const useravatar = require('./Routes/Users/avatar');
const showAvatar = require('./Routes/getimages/avatar');
const countlocations = require('./Routes/locations/count');

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
router.route('/users/avatar').post(cors(), upload.single('avatar'), useravatar);
router.route('/images/avatar/:name').get(cors(), showAvatar);
router.route('/locations/count/:name').get(cors(), countlocations);

module.exports = router;