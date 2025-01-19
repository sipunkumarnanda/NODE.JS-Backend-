import { Buffer, constants} from "buffer";

const uint8Array = new Uint8Array(10)
console.log(Buffer.poolSize); // 8192, which is 8 KB (default size of the internal buffer pool in Node.js).

// Change Buffer Pool Size 
Buffer.poolSize = 10000
console.log(Buffer.poolSize);  // 10000

// Condition For allocUnsafe to Use buffer pool
// Buffer Sized should be less than Buffer.poolSize of Half or less Than (BufferSize < Buffer.poolSize >>> 1) Right Shift 
const a = Buffer.alloc(4); // Allocates a buffer of 4 bytes initialized to zero.
const b = Buffer.allocUnsafe(40); 
const c = Buffer.allocUnsafe(40); 

const d = Buffer.from('abc');  // Behind The scene it uses allocUnsafe 

b[0] = 97
b[1] = 98

c[0] = 97
c[1] = 98

console.log(b.byteOffset);  // 256
console.log(c.byteOffset); // 264


console.log(b.buffer === c.buffer);  // True, because Buffer.allocUnsafe() uses the same ArrayBuffer behind the scenes, called the Buffer Pool in Node.js.
// True, because Buffer.allocUnsafe() shares the same underlying ArrayBuffer from the Buffer pool in Node.js.

console.log(a.buffer === b.buffer);   // False 

console.log("**************Buffer.from()*********************");
console.log(b.buffer === d.buffer);   // True 



// ------------------------------

const e = Buffer.allocUnsafe(4095);  
const f = Buffer.allocUnsafe(4095 - 271);  // True 
// Here its Create 2 Different BUffer Pool 

e[2] = 97
f[0] = 101


console.log(e.buffer === f.buffer);
console.log("End");

console.log("********Check Instance Of ***************");
console.log(a instanceof Uint8Array);  // True 
console.log(b instanceof Uint8Array);  // True
console.log(c instanceof Uint8Array);  // True
console.log(d instanceof Uint8Array);  // True

console.log("********Uint8Array'S Buffer VS Buffer.alloc's Buffer Check **************");
console.log(uint8Array.buffer === a.buffer); // False 
console.log(uint8Array.buffer === b.buffer); // False 

// Join 2 Buffers
// Here, Buffer.concat() creates a new Buffer. This new Buffer also uses the Buffer Pool if the conditions for the Buffer Pool are met.
const z = Buffer.alloc(4);

const joinBuffer = Buffer.concat([a, z]);
console.log(joinBuffer); // Logs the concatenated buffer
console.log(joinBuffer.buffer.byteLength); // Logs the byte length of the ArrayBuffer backing the concatenated buffer

console.log("*********Constants*********");
console.log(constants.MAX_LENGTH);
console.log(constants.MAX_STRING_LENGTH);


console.log("**********Buffer.allocUnsafeSlow()****************");
// Buffer.allocUnsafeSlow() Don't Uses Buffer Pool 
const x = Buffer.allocUnsafe(4)
const y = Buffer.allocUnsafeSlow(4)

console.log(x.buffer.byteLength);  //8192
console.log(y.buffer.byteLength); // 4


