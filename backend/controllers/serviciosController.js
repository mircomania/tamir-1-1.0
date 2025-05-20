const { google } = require('googleapis');
const { SPREADSHEET_ID, SHEET_NAME_SERVICIOS, auth } = require('../config');

async function getServicios(req, res) {
    const { servicio } = req.query;

    try {
        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client });
        const range = `${SHEET_NAME_SERVICIOS}!A:M`;
        const response = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range });
        const rows = response.data.values || [];
        if (!rows.length) return res.status(404).json({ error: 'No se encontraron datos.' });

        const headers = rows[0].map((h) => h.toLowerCase().trim());
        const data = rows.slice(1).map((row) => {
            const obj = {};
            headers.forEach((h, i) => (obj[h] = row[i] || ''));
            if (obj.instruest) obj.instruest = obj.instruest.split('\n');
            if (obj.instruext) obj.instruext = obj.instruext.split('\n');
            return obj;
        });

        if (servicio) {
            const found = data.find((d) => d.servicio.toLowerCase() === servicio.toLowerCase());
            if (!found) return res.status(404).json({ error: `No se encontró el servicio "${servicio}"` });
            return res.json({ service: found });
        }

        return res.json({ services: data });
    } catch (error) {
        console.error('Error al obtener servicios:', error);
        return res.status(500).json({ error: 'Error al obtener los servicios.' });
    }
}

module.exports = { getServicios };
