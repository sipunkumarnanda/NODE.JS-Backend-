import fs from 'fs/promises';

// Practical Use of Buffers in Real Life

// 1. File Operations
// Reading a text file:
const data = await fs.readFile('file.txt');
console.log(data); // <Buffer 61 62 63 64> - Displays the file content as a buffer.

// Reading an image file:
const imgData = await fs.readFile("C:\\Users\\Sipun Kumar Nanda\\OneDrive\\Pictures\\Screenshots\\Screenshot (11).png");
console.log(imgData); // Displays the image file's content as a buffer.
console.log(imgData.byteLength); // 1267235 bytes = 1.208529472 Mebibytes (This matches the file size shown in image properties).

// 2. Networking
// Explanation:
// - Buffers are commonly used in networking for handling data transfers.
// - When making an HTTP request or sending data to a server, the data is often managed as a buffer before being transmitted.
// - Similarly, any incoming request or data from a client arrives in the form of a buffer and is parsed or processed accordingly.
