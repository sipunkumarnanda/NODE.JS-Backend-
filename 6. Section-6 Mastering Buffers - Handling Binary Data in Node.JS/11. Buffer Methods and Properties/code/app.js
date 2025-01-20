import { all } from 'axios';
import { Buffer , constants } from 'buffer' ;


const nodeBuffer = Buffer.from("Hello World") // Here Bydefault it is uses UTF-8

console.log(nodeBuffer.toString());


// --------------------------------------------------------------------------------------
// In this example, we write the string using UTF-16LE encoding but read it using UTF-8.
const nodeBuffer2 = Buffer.from("Hello World Boyz", "utf-16le"); // The string is encoded into a Buffer using UTF-16LE.

// The raw buffer created will contain each character represented by 2 bytes (16 bits) in little-endian format.
console.log(nodeBuffer2);  
// Output: <Buffer 48 00 65 00 6c 00 6c 00 6f 00 20 00 57 00 6f 00 72 00 6c 00 64 00 20 00 42 00 6f 00 79 00 7a 00>

// When we read the buffer using UTF-8, it appears to produce the correct string.
// Why? Because UTF-8 skips null bytes (0x00) that were added by UTF-16LE, and it only interprets the non-zero bytes.
console.log(nodeBuffer2.toString('utf-8'));  
// The buffer is interpreted as: <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 42 6f 79 7a>
// Output: "Hello World Boyz"

// Note: This works because the characters in the string are ASCII-compatible. 
// For non-ASCII characters, this behavior would break as UTF-8 and UTF-16LE represent those differently.
// --------------------------------------------------------------------------------------


const nodeBuffer3 = Buffer.alloc(8)

nodeBuffer3[0] = 98 // b
nodeBuffer3[1] = 0
nodeBuffer3[7] = 104 // h

console.log(nodeBuffer3);  // <Buffer 62 00 00 00 00 00 00 68>
console.log(nodeBuffer3.toString());  // bh

// -----------------------------------------------------------------------------
// Decode Using Text Decoder 
const decoder = new TextDecoder('utf-8')
console.log(decoder.decode(nodeBuffer3));  // bh

// ------------------------------------------------------------------------
// Write Inside a file 
import fs from 'fs/promises'

fs.writeFile('file.txt' , nodeBuffer3) 

const data = await fs.readFile('file.txt')
console.log(nodeBuffer3.buffer);  // <Buffer 62 00 00 00 00 00 00 68>
console.log(data);
console.log(data.buffer.byteLength);  // Some Times its - 8192 and sometimes 65536
console.log(data.byteOffset);  // Some Times its - 304 and sometimes 0
console.log("Reading : ", data.toString());  // Reading :  bh

// -------------------------------------------------------------------------

const nodezbuffer4 = Buffer.from("abc");

console.log(nodezbuffer4);  // <Buffer 61 62 63> - Shows the raw bytes in hexadecimal format.

console.log(nodezbuffer4.toString("hex"));  // '616263' - Converts the buffer to a string of hexadecimal values.

console.log(nodezbuffer4.toString("binary"));  // 'abc' - 'binary' is an alias for 'latin1' encoding, which interprets bytes as single-byte characters.

console.log(nodezbuffer4.toString("latin1"));  // 'abc' - 'latin1' encoding treats each byte as a single character.

// ---------------------------------------------------------
const nodezbuffer5 = Buffer.from("आ");
console.log(nodezbuffer5.toString("latin1")); // 'à¤' - In 'latin1' encoding, the byte sequence doesn't correspond to the character 'आ', resulting in an incorrect output.

console.log(nodezbuffer5.toString("binary")); // 'à¤' - 'binary' is an alias for 'latin1' encoding, so it also gives the incorrect output as explained above.

console.log(nodezbuffer5.toString("utf-8"));  // 'आ' - UTF-8 correctly decodes the buffer and returns the expected character 'आ'.
