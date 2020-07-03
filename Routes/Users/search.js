const express = require('express');
const app = express();
const route = express.Router();
const joi = require('@hapi/joi');
const User = require('../../Models/users');
const cors = require('cors');