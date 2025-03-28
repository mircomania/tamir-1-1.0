require('dotenv').config();
const express = require('express');
const { google } = require('googleapis');

const router = express.Router();

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SHEET_NAME_GALERIA = process.env.SHEET_NAME_GALERIA || 'GALERIA';

// Configurar autenticación con la cuenta de servicio
const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Endpoint para obtener imágenes filtradas por categoría
router.get('/galeria', async (req, res) => {
    const { categoria } = req.query;

    if (!categoria) {
        return res.status(400).json({ error: 'Falta el parámetro "categoria"' });
    }

    try {
        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client });

        const range = `${SHEET_NAME_GALERIA}!A:B`;

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range,
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) {
            return res.status(404).json({ error: 'No se encontraron datos en la hoja.' });
        }

        // Filtrar las filas que coincidan con la categoría solicitada
        const images = rows.filter((row) => row[0] && row[0].toLowerCase() === categoria.toLowerCase()).map((row) => row[1]);

        res.json({ images });
    } catch (error) {
        console.error('Error al obtener imágenes:', error);
        res.status(500).json({ error: 'Error al obtener las imágenes.' });
    }
});

module.exports = router;
