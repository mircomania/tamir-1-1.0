const { google } = require('googleapis');
const { auth, SPREADSHEET_ID } = require('../config');

async function warmUpSheets() {
    try {
        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client });
        await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: 'A1:A1',
        });
        console.log('✅ Google Sheets warm-up completado');
    } catch (err) {
        console.error('⚠️ Error en warm-up de Google Sheets:', err.message);
    }
}

module.exports = { warmUpSheets };
