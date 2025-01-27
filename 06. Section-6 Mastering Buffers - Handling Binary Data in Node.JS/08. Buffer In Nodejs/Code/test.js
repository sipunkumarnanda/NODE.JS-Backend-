const a = new ArrayBuffer(4)

const nodeBuffer = Buffer.from(a)

const uint8Array = new Uint8Array(a)

uint8Array[0] = 97
uint8Array[1] = 98
uint8Array[2] = 99
uint8Array[3] = 100

console.log(nodeBuffer.buffer);  // ArrayBuffer { [Uint8Contents]: <61 62 63 64>, byteLength: 4 }
console.log(uint8Array.buffer);  // ArrayBuffer { [Uint8Contents]: <61 62 63 64>, byteLength: 4 }

console.log(nodeBuffer.buffer === uint8Array.buffer);    // true

console.log(uint8Array.toString());   // 97,98,99,100
console.log(nodeBuffer.toString());  // abcd

const nodeBuffer3 = Buffer.alloc(4)
console.log(nodeBuffer3);


// --------------------------------------

console.log("-------------------------");


const nodeBufferr = Buffer.alloc(4)
const nodeBufferr2 = Buffer.from([97,98,99,100])
const nodeBufferr3 = Buffer.allocUnsafe(4)

console.log(nodeBufferr.byteLength);   // 4
console.log(nodeBufferr2.byteLength);  // 4
console.log(nodeBufferr3.byteLength);  // 4

console.log(nodeBufferr.buffer.byteLength);   // 4
console.log(nodeBufferr2.buffer.byteLength);  // 8192
console.log(nodeBufferr3.buffer.byteLength);  // 8192