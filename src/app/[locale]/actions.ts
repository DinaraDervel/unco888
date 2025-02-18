'use server';

import { initGoogleAPI } from '@/server-actions/google-sheets';
import { Readable } from 'stream';
import { v4 as uuidv4 } from 'uuid';


const GOOGLE_SHEET_SELLOFFERS_RANGE = process.env.GOOGLE_SHEET_SELLOFFERS_RANGE;
const GOOGLE_SHEET_FEEDBACK_RANGE  = process.env.GOOGLE_SHEET_FEEDBACK_RANGE;

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

export const loadFeedback = async () => {
  const { sheets, spreadsheetId, range } = await initGoogleAPI(GOOGLE_SHEET_FEEDBACK_RANGE);

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

async function bufferToStream(buffer: Buffer) {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

export const sendFeedback = async (
  name: string,
  message: string,
  photo: File | null,
  visible: 'FALSE' = 'FALSE'
) => {
  const { sheets, spreadsheetId } = await initGoogleAPI();
  const { drive } = await initGoogleAPI();
  const submissionId = `SUBM_${uuidv4()}`;

  try {
    if (!sheets) throw new Error('Server error');

    let photoUrl = '';
    if (photo) {
      const photoBuffer = Buffer.from(await photo.arrayBuffer());
      const photoStream = await bufferToStream(photoBuffer);

      const driveResponse = await drive?.files.create({
        requestBody: {
          name: `${submissionId}_${photo.name}`,
          mimeType: photo.type,
          parents: [process.env.GOOGLE_DRIVE_FOLDER_ID!],
        },
        media: {
          mimeType: photo.type,
          body: photoStream,
        },
        fields: 'id, webContentLink',
      });

      if (driveResponse?.data.id) {
        await drive?.permissions.create({
          fileId: driveResponse?.data.id,
          requestBody: {
            role: 'reader',
            type: 'anyone',
          },
        });

        photoUrl = `https://drive.google.com/uc?export=view&id=${driveResponse.data.id}`;
      } else {
        console.error('Failed to get file ID from Google Drive response');
      }
    }

    const sheetsRes = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: GOOGLE_SHEET_FEEDBACK_RANGE,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[submissionId, name, photoUrl, message, visible]],
      },
    });

    return { status: sheetsRes.status, error: '' };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return { status: 500, error: error.message };
    }
    console.log('Unknown error');
    return { status: 500, error: 'Unknown error occurred' };
  }
};