const { google } = require('googleapis');
const { SPREADSHEET_ID, SHEET_NAME_GALERIA, auth } = require('../config');

async function getGaleria(req, res) {
    const { categoria } = req.query;
    if (!categoria) {
        return res.status(400).json({ error: 'Falta el parámetro "categoria"' });
    }

    try {
        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client });
        const range = `${SHEET_NAME_GALERIA}!A:B`;
        const response = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range });
        const rows = response.data.values || [];

        const images = rows.filter((r) => r[0]?.toLowerCase() === categoria.toLowerCase()).map((r) => r[1]);

        return res.json({ images });
    } catch (error) {
        console.error('Error al obtener imágenes:', error);
        return res.status(500).json({ error: 'Error al obtener las imágenes.' });
    }
}

module.exports = { getGaleria };
