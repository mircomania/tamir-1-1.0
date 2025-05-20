const { google } = require('googleapis');
const { SPREADSHEET_ID, SHEET_NAME_LEADS, auth } = require('../config');

async function postSubmit(req, res) {
    const { nombre, telefono, email, sesion, plan: rawPlan, mensaje, novedades } = req.body;
    try {
        const plan = rawPlan === 'Tipo de Plan' ? '' : rawPlan;
        const novedadesStr = novedades ? 'si' : 'no';

        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client });
        const values = [[nombre, telefono, email, sesion, plan, mensaje, new Date().toLocaleString(), 'En espera', novedadesStr]];

        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME_LEADS}!A2:A`,
            valueInputOption: 'USER_ENTERED',
            resource: { values },
        });

        return res.status(200).json({ message: 'Datos enviados correctamente.' });
    } catch (error) {
        console.error('Error agregando datos:', error);
        return res.status(500).json({ message: 'Error al enviar los datos.' });
    }
}

module.exports = { postSubmit };
