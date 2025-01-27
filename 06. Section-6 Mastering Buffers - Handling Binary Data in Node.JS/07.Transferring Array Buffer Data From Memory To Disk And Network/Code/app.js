import fs from 'fs/promises'; // Import the fs/promises module for file system operations

// Initialize a Uint8Array with 5 elements
const uint8Array = new Uint8Array(5);

// Assign hexadecimal values (representing ASCII codes) to the Uint8Array
uint8Array[0] = 0x53; // 'S'
uint8Array[1] = 0x49; // 'I'
uint8Array[2] = 0x50; // 'P'
uint8Array[3] = 0x55; // 'U'
uint8Array[4] = 0x4E; // 'N'

// Log the Uint8Array to the console
console.log(uint8Array); // Output: Uint8Array(5) [ 83, 73, 80, 85, 78 ]

// Optional: Decode and print the text from Uint8Array (uncomment if needed)
// const decoder = new TextDecoder("utf-8");
// console.log(decoder.decode(uint8Array)); // Output: "SIPUN"

// Write the Uint8Array to a file on disk
fs.writeFile('01.buffer-text.txt', uint8Array);

// Working with ArrayBuffer using DataView
// Create a new ArrayBuffer of size 6 bytes
const b = new ArrayBuffer(6);

// Create a DataView to manipulate the ArrayBuffer
const view = new DataView(b);

// Set values in the DataView (hexadecimal values for ASCII characters)
view.setUint8(0, 0x53); // 'S'
view.setUint8(1, 0x49); // 'I'
view.setUint8(2, 0x50); // 'P'
view.setUint8(3, 0x55); // 'U'
view.setUint8(4, 0x4E); // 'N'
view.setUint8(5, 0x4B); // 'K'

// Write the DataView content to a file
fs.writeFile('02.Buffer-Text2.txt', view);

// Using ArrayBuffer from the existing Uint8Array
// Create a new DataView for the buffer of uint8Array
const view2 = new DataView(uint8Array.buffer);

// Log the DataView to verify its structure
console.log(view2); // DataView of the original Uint8Array buffer

// Write the DataView content (from the uint8Array buffer) to a file
fs.writeFile('03.Buffer-Text.txt', view2);
