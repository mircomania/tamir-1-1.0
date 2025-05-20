const express = require('express');
const { getServicios } = require('../controllers/serviciosController');
const router = express.Router();

router.get('/servicios', getServicios);

module.exports = router;
