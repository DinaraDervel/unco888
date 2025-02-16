'use server';

import { initGoogleAPI } from '@/server-actions/google-sheets';

type DataRow = string[];
type Data = DataRow[];

export interface TransformedObject {
  [key: string]: string;
}

const GOOGLE_SHEET_SELLOFFERS_RANGE = process.env.GOOGLE_SHEET_SELLOFFERS_RANGE;
const GOOGLE_SHEET_QA_RANGE = process.env.GOOGLE_SHEET_QA_RANGE;

const transformData = (data: Data): TransformedObject[] => {
  const headers: string[] = data[0];
  const result: TransformedObject[] = [];

  for (let i = 1; i < data.length; i++) {
    const obj: TransformedObject = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = data[i][j];
    }
    result.push(obj);
  }

  return result;
};

export const loadSellOffers = async () => {
  const { sheets, spreadsheetId, range } = await initGoogleAPI(GOOGLE_SHEET_SELLOFFERS_RANGE);

  if (sheets) {
    try {
      const getRows = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      console.log(getRows);
      return { data: getRows.data.values as string[][], status: getRows.status };
    } catch (error) {
      console.log(error);
    }
  }
  return { data: null, status: 500 };
};

export const sendSellOffer = async (
  quantity: string,
  price: string,
  link: string,
  contact: string,
  visible: boolean
) => {
  const { sheets, spreadsheetId } = await initGoogleAPI();

  try {
    if (!sheets) throw new Error('Server error');
    const sheetsRes = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: GOOGLE_SHEET_SELLOFFERS_RANGE,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[Date.now(), quantity, price, link, contact, visible]],
      },
    });
    return { status: sheetsRes.status, error: '' };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return { status: 500, error: error.message };
    } else {
      console.log('Unknown error');
    }
  }
  return { status: 500, error: '' };
};

export const getQaData = async () => {
  const { sheets, spreadsheetId, range } = await initGoogleAPI(GOOGLE_SHEET_QA_RANGE);

  if (sheets) {
    try {
      const getRows = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      const rows: string[][] = getRows.data.values || [];

      return {
        data: transformData(rows),
        status: getRows.status,
      };
    } catch (error) {
      console.log(error);
    }
  }

  return { data: null, status: 500 };
};