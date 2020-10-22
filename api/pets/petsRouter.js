const express = require('express');
const authRequired = require('../middleware/authRequired');
const Pets = require('./petsModel');
const router = express.Router();