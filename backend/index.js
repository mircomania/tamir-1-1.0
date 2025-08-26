require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const { postSubmit } = require('./controllers/submitController');
const { warmUpSheets } = require('./utils/warmup');
const app = express();

// 1) Cabeceras de seguridad
app.use(helmet());
app.disable('x-powered-by');

// 2) CORS y parsers
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3) Rate limiter global (100 peticiones por 15m por IP)
app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutos
        max: 100,
        standardHeaders: true,
        legacyHeaders: false,
        message: 'Demasiadas peticiones desde tu IP, por favor espera un rato.',
    })
);

// 4) ENDPOINT DE SUBMIT con validación y sanitización
app.post(
    '/api/submit',
    [
        body('nombre').isString().isLength({ min: 2, max: 50 }).trim().escape(),

        body('email').isEmail().normalizeEmail(),

        body('mensaje').optional({ checkFalsy: true }).trim().escape(),

        body('telefono')
            .matches(/^\+56\d{10}$/)
            .withMessage('Formato de teléfono inválido. Debe ser +56XXXXXXXX.'),

        body('sesion').custom((value) => {
            if (!value || value === 'Tipo de Sesión') {
                throw new Error('Debes seleccionar un tipo de sesión válido.');
            }
            return true;
        }),
    ],
    async (req, res, next) => {
        const errs = validationResult(req);
        if (!errs.isEmpty()) {
            return res.status(400).json({ errors: errs.array() });
        }
        try {
            const result = await postSubmit(req.body);
            res.json(result);
        } catch (err) {
            next(err);
        }
    }
);

// 5) Monta el resto de tus rutas
app.use('/api', require('./routes/galeria'));
app.use('/api', require('./routes/servicios'));

app.get('/api/warmup', async (req, res) => {
    console.log('📡 Llamada a /api/warmup desde frontend');
    try {
        await warmUpSheets();
        res.json({ status: 'ok', message: 'Warm-up ejecutado' });
    } catch (err) {
        console.error('❌ Error en /api/warmup:', err.message);
        res.status(500).json({ status: 'error', message: err.message });
    }
});

// 6) Manejador de errores genérico
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Error interno del servidor' });
});

// 7) Arranque
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    await warmUpSheets(); // 👈 se ejecuta al arrancar el server
});
