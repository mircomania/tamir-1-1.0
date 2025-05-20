require('dotenv').config();
const { google } = require('googleapis');

const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

module.exports = {
    SPREADSHEET_ID: process.env.SPREADSHEET_ID,
    SHEET_NAME_GALERIA: process.env.SHEET_NAME_GALERIA || 'GALERIA',
    SHEET_NAME_SERVICIOS: process.env.SHEET_NAME_SERVICIOS || 'SERVICIOS',
    SHEET_NAME_LEADS: process.env.SHEET_NAME_LEADS || 'LEADS',
    auth,
};
