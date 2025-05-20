const express = require('express');
const { getGaleria } = require('../controllers/galeriaController');
const router = express.Router();

router.get('/galeria', getGaleria);

module.exports = router;
