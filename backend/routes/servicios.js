const express = require('express');
const { getServicios, refreshServicios } = require('../controllers/serviciosController');
const checkSecret = require('../middlewares/checkSecret');

const router = express.Router();

router.get('/servicios', getServicios);
router.post('/refresh-servicios', checkSecret, refreshServicios);

module.exports = router;
