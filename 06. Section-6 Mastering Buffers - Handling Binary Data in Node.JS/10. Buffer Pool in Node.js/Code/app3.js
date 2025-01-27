import { Buffer, constants } from 'buffer';
import { buffer } from 'stream/consumers';

const bufferPool = Buffer.allocUnsafe(10)
console.log(constants.MAX_LENGTH);  // 4294967296
// This means the maximum size for a Buffer in Node.js is 4,294,967,296 bytes, which equals 4 GiB (Gibibytes). 
// In other words, we can create a Buffer of up to 4 GiB in size using Node.js.

// Creating Buffer 

const a = Buffer.alloc(4294967296)
console.log(a.buffer.byteLength);


// const b = Buffer.alloc(4294967297);   // RangeError [ERR_OUT_OF_RANGE]: The value of "size" is out of range. 
// It must be >= 0 and <= 4294967296, as the maximum buffer size in Node.js is 4 GiB (4,294,967,296 bytes).
// console.log(b.buffer.byteLength);  // This line would not be executed due to the error above.


console.log(constants.MAX_STRING_LENGTH);  // 536870888  Mean Approx 500 MB 

// const b = Buffer.from("Aaaaaaaaaaa")
// console.log(b.buffer);

const b = Buffer.from('a'.repeat(constants.MAX_STRING_LENGTH))  // byteLength: 536870888
console.log(b.buffer);

console.log(bufferPool.buffer === b.buffer);  // False 