import {Buffer} from "buffer"

// Timing the execution of Buffer.alloc
console.time('Buffer.alloc') 
for(let i = 0 ; i < 100000; i++){
    // Allocates a buffer of 1024 bytes (1 KB)
    // Buffer.alloc initializes the memory with zeroes
    const buffer = Buffer.alloc(1024)  // 1024 Bytes = 1 KB 
}
console.timeEnd('Buffer.alloc')  // Ends the timer for Buffer.alloc

// Timing the execution of Buffer.allocUnsafe
console.time('Buffer.allocUnsafe') 
for(let i = 0 ; i < 100000; i++){
    // Allocates a buffer of 1024 bytes (1 KB)
    // Buffer.allocUnsafe does NOT initialize the memory, which makes it faster but potentially unsafe
    const buffer = Buffer.allocUnsafe(1024)
}
console.timeEnd('Buffer.allocUnsafe')  // Ends the timer for Buffer.allocUnsafe
