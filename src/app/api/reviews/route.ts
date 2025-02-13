import { NextResponse } from 'next/server';
import { google } from 'googleapis';

type Review = {
  id: string;
  name: string;
  photo: string;
  message: string;
  visible: string;
};

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Feedback!A:E',
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      return NextResponse.json({ reviews: [] });
    }

    const approvedReviews: Review[] = rows.slice(1)
      .filter(row => row[4].toString() === 'TRUE')
      .map(row => ({
        id: row[0]?.toString() || '',
        name: row[1]?.toString() || '',
        photo: row[2]?.toString() || '',
        message: row[3]?.toString() || '',
        visible: 'TRUE'
      }));

    return NextResponse.json({ reviews: approvedReviews });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'An error occurred' },
      { status: 500 },
    );
  }
}