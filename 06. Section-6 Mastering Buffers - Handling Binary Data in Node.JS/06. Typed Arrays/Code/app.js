const a = new ArrayBuffer(4);  
// An ArrayBuffer of 4 bytes is created, initially filled with zeros.

// For 8-bit unsigned integers
const uint8Array = new Uint8Array(a);  
// Creates a Uint8Array view over the ArrayBuffer, treating it as an array of 8-bit unsigned integers.

console.log(uint8Array);  
// Logs the initial Uint8Array: [0, 0, 0, 0].
// The buffer is represented as four 8-bit (1-byte) values.


// For 16-bit unsigned integers
const uint16Array = new Uint16Array(a);
// Creates a Uint16Array view over the ArrayBuffer, treating it as an array of 16-bit unsigned integers.
// console.log(uint16Array);  
// Logs: [0, 0].
// Since the buffer is 4 bytes, it's interpreted as two 16-bit (2-byte) values.


// For 32-bit unsigned integers
// const uint32Array = new Uint32Array(a);
// Creates a Uint32Array view over the ArrayBuffer, treating it as a single 32-bit unsigned integer.
// console.log(uint32Array);  
// Logs: [0].
// Since the buffer is 4 bytes, it's treated as one 32-bit (4-byte) value.


// Writing and Reading Data Using Uint8Array

uint8Array[0] = 0xF3;  
// Writes the hexadecimal value `0xF3` (243 in decimal) to the first byte (offset 0) of the buffer.

console.log(uint8Array);  
// Logs: [243, 0, 0, 0].
// The first byte is updated to 243, and the rest remain as 0.

console.log(uint8Array[0]);  // Output: 243
// Reads the value at index 0 of the Uint8Array, which is 243.


// Writing a value to index 2
uint8Array[1] = 0x34EA;  
// Writes the value `0x34EA` (hexadecimal) to index 2 of the Uint8Array.
// Since Uint8Array represents 8-bit values (0-255), it stores only the least significant 8 bits of the value:
// - `0x34EA` in binary is `0011 0100 1110 1010`.
// - The last 8 bits (`1110 1010`) equal `234` in decimal.

console.log(uint8Array[1]);  // Output: 234  
// Reads the value at index 2 of the Uint8Array, which is 234 after truncation.


// Using Uint16Array()
console.log(uint16Array);

// Trying to assign a value to an index outside the range
uint16Array[2] = 0x34ea;  // Attempt to set a value at index 2
console.log(uint16Array[2]);  // undefined

// Explanation:
// When creating a Uint16Array over an ArrayBuffer, it maps the buffer in chunks of 2 bytes:
// - Index 0 corresponds to bytes 0 and 1 of the buffer.
// - Index 1 corresponds to bytes 2 and 3 of the buffer.
// Since the ArrayBuffer is only 4 bytes long, it can hold only two 16-bit values.
// Therefore, index 2 is out of bounds, and accessing it returns `undefined`.


// Now 
uint16Array[1] = 0x34ea;  // Attempt to set a value at index 2
console.log(uint16Array[1]);  // 13546 