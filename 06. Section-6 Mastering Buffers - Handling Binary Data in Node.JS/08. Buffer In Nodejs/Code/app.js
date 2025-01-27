const uint8Array = new Uint8Array(4)

// const nodeBuffer = new Buffer(4) // DeprecationWarning: Buffer() is deprecated due to security and usability issues.

// console.log(nodeBuffer);

// console.log(uint8Array.buffer);
// console.log(nodeBuffer.buffer);

import {Buffer} from "buffer"   // Way-1 
import { arrayBuffer } from "stream/consumers";
// npm i @types/node -D

// Using Buffer.alloc()
const nodeBuffer = Buffer.alloc(4)

console.log(uint8Array.buffer);
console.log(nodeBuffer.buffer); 


// Uisng Buffer.from()
const a = new ArrayBuffer(4)
const nodeBuffer2 = Buffer.from(a)

console.log(nodeBuffer2);
console.log(nodeBuffer2.buffer);
