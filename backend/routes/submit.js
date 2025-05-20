const express = require('express');
const { postSubmit } = require('../controllers/submitController');
const router = express.Router();

router.post('/submit', postSubmit);

module.exports = router;
