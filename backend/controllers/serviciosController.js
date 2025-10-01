const { google } = require('googleapis');
const fs = require('fs-extra');
const path = require('path');
const { SPREADSHEET_ID, SHEET_NAME_SERVICIOS, auth } = require('../config');

const filePath = path.join(__dirname, '..', 'tmp', 'servicios.json');
const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;

async function fetchFromSheets() {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME_SERVICIOS}!A:M`,
    });

    const rows = response.data.values || [];
    if (!rows.length) return [];

    const headers = rows[0].map((h) => h.toLowerCase().trim());
    return rows.slice(1).map((row) => {
        const obj = {};
        headers.forEach((h, i) => (obj[h] = row[i] || ''));
        if (obj.instruest) obj.instruest = obj.instruest.split('\n');
        if (obj.instruext) obj.instruext = obj.instruext.split('\n');
        return obj;
    });
}

async function getServicios(req, res) {
    try {
        let data = [];

        if (await fs.pathExists(filePath)) {
            const stats = await fs.stat(filePath);
            const age = Date.now() - stats.mtimeMs;

            if (age < ONE_WEEK) {
                data = await fs.readJson(filePath);
                return res.json({ services: data, cached: true });
            }
        }

        data = await fetchFromSheets();
        await fs.writeJson(filePath, data, { spaces: 2 });

        return res.json({ services: data, cached: false });
    } catch (error) {
        console.error('Error al obtener servicios:', error);
        return res.status(500).json({ error: 'Error al obtener los servicios.' });
    }
}

async function refreshServicios(req, res) {
    try {
        const data = await fetchFromSheets();
        await fs.writeJson(filePath, data, { spaces: 2 });
        return res.json({ services: data, refreshed: true });
    } catch (error) {
        console.error('Error en refreshServicios:', error);
        return res.status(500).json({ error: 'No se pudo refrescar servicios.' });
    }
}

module.exports = { getServicios, refreshServicios };
