import fs from 'fs/promises';

// Read the Base64-encoded content as a string
const data1 = await fs.readFile('loveMessage.txt', "utf-8"); // File contains Base64 text
console.log('Base64 Encoded:', data1);

// Decode the Base64 string into the original content
const decodedData = Buffer.from(data1, 'base64').toString('utf-8'); // Decoded to plain text
console.log('Decoded Content:', decodedData);
