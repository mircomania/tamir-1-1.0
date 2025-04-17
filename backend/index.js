require('dotenv').config();
const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');

const app = express();

// Configurar middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Variables de entorno
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SHEET_NAME_LEADS = process.env.SHEET_NAME_LEADS || 'LEADS';

// Configurar autenticación con la cuenta de servicio
const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Ruta para recibir los datos del formulario
app.post('/submit', async (req, res) => {
    const { nombre, telefono, email, sesion, mensaje } = req.body;

    try {
        // Obtener cliente autenticado
        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client });

        // Preparar la fila a agregar
        const values = [[nombre, telefono, email, sesion, mensaje, new Date().toLocaleString(), 'En espera']];

        const resource = {
            values,
        };

        // Se utiliza "append" para agregar la fila al final
        const result = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME_LEADS}!A2:A`,
            valueInputOption: 'USER_ENTERED',
            resource,
        });

        res.status(200).json({ message: 'Datos enviados correctamente.', result });
    } catch (error) {
        console.error('Error agregando datos a Google Sheets:', error);
        res.status(500).json({ message: 'Hubo un error al enviar los datos a Google Sheets.' });
    }
});

// Importar y usar la ruta de galería
const galeriaRoutes = require('./galeria');
app.use('/api', galeriaRoutes);

// Importar y usar la ruta de servicios
const serviciosRoutes = require('./servicios');
app.use('/api', serviciosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
