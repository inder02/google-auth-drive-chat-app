const { google } = require('googleapis');
const oauth2Client = require('../config/googleAuth');

const driveService = {
  uploadFile: async () => {
    const drive = google.drive({ version: 'v3', auth: oauth2Client });

    const fileMetadata = {
      name: 'example.txt',
    };
    const media = {
      mimeType: 'text/plain',
      body: 'Hello World!',
    };

    const file = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id',
    });

    return file.data.id;
  },
};

module.exports = driveService;
