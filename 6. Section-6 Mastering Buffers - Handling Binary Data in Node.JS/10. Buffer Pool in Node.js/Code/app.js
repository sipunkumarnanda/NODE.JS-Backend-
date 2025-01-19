import { Buffer } from "buffer";
import { buffer } from "stream/consumers";

console.log(Buffer.poolSize); // 8192, which is 8 KB (default size of the internal buffer pool in Node.js).

const a = Buffer.alloc(4); // Allocates a buffer of 4 bytes initialized to zero.
const b = Buffer.allocUnsafe(4); 
const c = Buffer.allocUnsafe(4); 

b[0] = 97
b[1] = 98

c[0] = 97
c[1] = 98

console.log(typeof a); // Object
console.log(typeof a.buffer);  // Object 

console.log(a.buffer); // Logs the underlying ArrayBuffer of `a`. This is the raw memory backing the buffer.
console.log(b.buffer); // Logs the underlying ArrayBuffer of `b`. Since `allocUnsafe` uses a shared memory pool, 
                       // it may share memory with other buffers.

console.log(a.byteLength); // 4 - The byte length of the `Buffer` `a` (Node.js Buffer abstraction).
console.log(b.byteLength); // 4 - The byte length of the `Buffer` `b` (Node.js Buffer abstraction).

console.log(a.buffer.byteLength); // 4 - The byte length of the underlying `ArrayBuffer` for `a`.
console.log(b.buffer.byteLength); // 8192 - The byte length of the underlying `ArrayBuffer` for `b`.  // `Buffer.allocUnsafe()` uses a shared internal pool (8 KB by default).

