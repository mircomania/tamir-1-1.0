const express = require('express');
const { getGaleria, refreshGaleria } = require('../controllers/galeriaController');
const checkSecret = require('../middlewares/checkSecret');

const router = express.Router();

router.get('/galeria', getGaleria);
router.post('/refresh-galeria', checkSecret, refreshGaleria);

module.exports = router;
