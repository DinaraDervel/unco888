import { google, sheets_v4, Common, Auth } from 'googleapis';

type GoogleSheetParams = {
  spreadsheetId: string;
  range: string;
  auth: Common.GoogleAuth<Auth.AuthClient> | null;
  sheets: sheets_v4.Sheets | null;
};

export const getSheetData = async (): Promise<GoogleSheetParams> => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const range = 'QA!B2:C4';

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
    });
    return response.data.values;
  } catch (error) {
    console.error('Error fetching sheets data', error);
    return [];
  }
};
