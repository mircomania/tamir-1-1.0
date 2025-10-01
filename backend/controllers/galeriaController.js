const { google } = require('googleapis');
const fs = require('fs-extra');
const path = require('path');
const { auth, SPREADSHEET_ID, SHEET_NAME_GALERIA } = require('../config');

const filePath = path.join(__dirname, '..', 'tmp', 'galeria.json');

// 1 semana en ms
const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;

async function fetchFromSheets() {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME_GALERIA}!A:M`,
    });

    const rows = response.data.values || [];
    if (!rows.length) return [];

    const headers = rows[0].map((h) => h.toLowerCase().trim());
    return rows.slice(1).map((row) => {
        const obj = {};
        headers.forEach((h, i) => (obj[h] = row[i] || ''));
        return obj;
    });
}

async function getGaleria(req, res) {
    try {
        let data = [];

        // si existe json y no está vencido → devolverlo
        if (await fs.pathExists(filePath)) {
            const stats = await fs.stat(filePath);
            const age = Date.now() - stats.mtimeMs;

            if (age < ONE_WEEK) {
                data = await fs.readJson(filePath);
            }
        }

        // si no existe o está vencido → refrescar desde Sheets
        if (!data.length) {
            data = await fetchFromSheets();
            await fs.writeJson(filePath, data, { spaces: 2 });
        }

        // ⚡ aplicar filtro por categoría si viene en la query
        const { categoria } = req.query;
        let filtered = data;
        if (categoria) {
            filtered = data.filter((item) => item.categoria?.toLowerCase() === categoria.toLowerCase());
        }

        return res.json({ galeria: filtered, cached: true });
    } catch (err) {
        console.error('Error en getGaleria:', err);
        return res.status(500).json({ error: 'Error al obtener galería.' });
    }
}

// endpoint secreto para forzar update manual
async function refreshGaleria(req, res) {
    try {
        const data = await fetchFromSheets();
        await fs.writeJson(filePath, data, { spaces: 2 });
        return res.json({ galeria: data, refreshed: true });
    } catch (err) {
        console.error('Error en refreshGaleria:', err);
        return res.status(500).json({ error: 'No se pudo refrescar galería.' });
    }
}

module.exports = { getGaleria, refreshGaleria };
