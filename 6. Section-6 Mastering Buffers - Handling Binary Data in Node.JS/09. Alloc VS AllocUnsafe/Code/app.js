import { Buffer } from "buffer";

// Allocate a safe buffer of 4500 bytes initialized to zero.
const buffer1 = Buffer.alloc(4500);

// Allocate an unsafe buffer of 4500 bytes (contents are uninitialized and may contain old data).
const buffer2 = Buffer.allocUnsafe(4500);

console.log(buffer1); // Log the contents of the safe buffer (initialized to zero).
console.log(buffer2); // Log the contents of the unsafe buffer (uninitialized memory).

// Fill the unsafe buffer with the hexadecimal value 0x50 (ASCII character 'P').
buffer2.fill(0x50);

console.log(buffer1.toString()); // Convert and log the safe buffer as a string (likely empty since it's filled with zeros).
console.log(buffer2.toString()); // Convert and log the unsafe buffer as a string (filled with 'P').

// Note: When using allocUnsafe(), always fill or overwrite the buffer immediately
// to ensure no unintended or sensitive data from memory is present in the buffer.
