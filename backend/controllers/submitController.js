const { google } = require('googleapis');
const { SPREADSHEET_ID, SHEET_NAME_LEADS, auth } = require('../config');

async function postSubmit({ nombre, telefono, email, sesion, plan: rawPlan, mensaje, novedades }) {
    const plan = rawPlan === 'Tipo de Plan' ? '' : rawPlan;
    const novedadesStr = novedades ? 'si' : 'no';

    // Conecta con Google Sheets
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });
    const values = [[nombre, telefono, email, sesion, plan, mensaje, new Date().toLocaleString(), 'En espera', novedadesStr]];

    // Inserta la fila en la hoja
    await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME_LEADS}!A2:A`,
        valueInputOption: 'USER_ENTERED',
        resource: { values },
    });

    return { message: 'Datos enviados correctamente.' };
}

module.exports = { postSubmit };
