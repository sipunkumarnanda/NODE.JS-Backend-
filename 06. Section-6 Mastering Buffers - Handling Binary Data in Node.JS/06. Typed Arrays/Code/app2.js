// const a = new ArrayBuffer(3)
// We should avoid creating an ArrayBuffer with a size that doesn't align well with data manipulation requirements.
// For instance, an ArrayBuffer of size 3 may lead to inefficient data handling since most typed arrays work with powers of 2 (e.g., 8-bit, 16-bit, 32-bit chunks).

// Instead, we can create a typed array directly:
const uint8Array = new Uint8Array(4);  
// A `Uint8Array` creates a typed array of 4 bytes and internally allocates an ArrayBuffer of the same size (4 bytes).

// `uint8Array.buffer` provides access to the underlying ArrayBuffer:
console.log(uint8Array.buffer);  
// Output: ArrayBuffer { byteLength: 4 }
// Explanation:
// - The `.buffer` property of a typed array gives access to the ArrayBuffer it is based on.
// - This ArrayBuffer has a `byteLength` of 4 because the Uint8Array was initialized with 4 elements.
// - The buffer can be shared or manipulated further using views like DataView, Uint16Array, etc.

console.log(uint8Array);   // Uint8Array(4) [ 0, 0, 0, 0 ]


// Fill The Array 
uint8Array[0] = 0xFE
uint8Array[1] = 0xFD
uint8Array[2] = 0xFC
uint8Array[3] = 0xFB

console.log(uint8Array);


// We can perform the same operation in a shorter way by initializing the Uint8Array directly with an array of values.

const uint8Array2 = new Uint8Array([0xAb, 0x23, 0xCD, 0xFF]);  
// Creates a Uint8Array initialized with the values `[0xAB, 0x23, 0xCD, 0xFF]`.
// Each value is treated as an 8-bit unsigned integer (0-255).

console.log(uint8Array2);  
// Output: Uint8Array(4) [171, 35, 205, 255]
// Explanation: The values are displayed in their decimal equivalents (e.g., `0xAB` → `171`).

console.log(uint8Array2.buffer);  
// Output: ArrayBuffer { byteLength: 4 }
// Explanation: The `buffer` property of `uint8Array2` gives access to its underlying ArrayBuffer, which has a size of 4 bytes.

// ---------------------------

// Creating a large Uint8Array of size approximately 1.9 GB
// const uint8ArrayInGB = new Uint8Array(1.9 * 1024 * 1024 * 1024);  
// `1.9 * 1024 * 1024 * 1024` calculates the size in bytes (1.9 GB).  
// console.log(uint8ArrayInGB.buffer);  
// Output: ArrayBuffer { byteLength: 2040109465 } (approximately 1.9 GB)

// Example to iterate and fill the array manually (inefficient for large arrays):
// for (let i = 0; i < uint8ArrayInGB.buffer.byteLength; i++) {
//     uint8ArrayInGB[i] = i + 1;  // Assigns a value to each index.
// }

// Shortcut Method to Fill an Array with the Same Value
// const uint8ArrayInGB = new Uint8Array(1.9 * 1024 * 1024 * 1024).fill(0xff);  
// `.fill(0xff)` initializes every byte in the array with the value `0xFF` (255 in decimal).

// console.log(uint8ArrayInGB.buffer);  
// Output: ArrayBuffer { byteLength: 2040109465 }
// Explanation:
// - This ArrayBuffer is the underlying buffer for `uint8ArrayInGB`.
// - Every byte in the buffer is now set to `0xFF` (255 in decimal) using `.fill()` method.
// - This is a more efficient way to populate an array with a default value for large datasets.


// pass another argument to arraybuffer 

const b = new ArrayBuffer(4, {maxByteLength: 16})
console.log(b);

b.resize(8)
console.log(b);

// b.resize(20)
// console.log(b); // app2.js:76 Uncaught RangeError: ArrayBuffer.prototype.resize: Invalid length parameter

const newArrayBuffer = b.transfer()
console.log(newArrayBuffer);