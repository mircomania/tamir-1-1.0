require('dotenv').config();
const express = require('express');
const { google } = require('googleapis');

const router = express.Router();

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SHEET_NAME_SERVICIOS = process.env.SHEET_NAME_SERVICIOS || 'SERVICIOS';

// Configurar autenticación con la cuenta de servicio
const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Endpoint para obtener el servicio filtrado por nombre
router.get('/servicios', async (req, res) => {
    const { servicio } = req.query;

    try {
        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client });
        const range = `${SHEET_NAME_SERVICIOS}!A:M`;
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range,
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) {
            return res.status(404).json({ error: 'No se encontraron datos en la hoja.' });
        }

        const headers = rows[0].map((header) => header.toLowerCase().trim());
        const dataRows = rows.slice(1);

        const servicios = dataRows.map((row) => {
            const servicioObjeto = {};
            headers.forEach((header, idx) => {
                servicioObjeto[header] = row[idx] || '';
            });
            if (servicioObjeto.instruest) {
                servicioObjeto.instruest = servicioObjeto.instruest.split('\n');
            }
            if (servicioObjeto.instruext) {
                servicioObjeto.instruext = servicioObjeto.instruext.split('\n');
            }
            return servicioObjeto;
        });

        // Si se pasa el query, filtra para devolver sólo el servicio solicitado
        if (servicio) {
            const servicioEncontrado = servicios.find((item) => item.servicio.toLowerCase() === servicio.toLowerCase());
            if (!servicioEncontrado) {
                return res.status(404).json({ error: `No se encontró el servicio "${servicio}"` });
            }
            return res.json({ service: servicioEncontrado });
        }

        // Si no se pasa el query, devuelve todos los servicios
        res.json({ services: servicios });
    } catch (error) {
        console.error('Error al obtener servicios:', error);
        res.status(500).json({ error: 'Error al obtener los servicios.' });
    }
});

module.exports = router;
