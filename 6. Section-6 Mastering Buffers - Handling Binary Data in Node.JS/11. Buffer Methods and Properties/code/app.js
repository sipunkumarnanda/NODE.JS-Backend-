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
import { buffer } from 'stream/consumers';

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


// -----------------------------------------------------------------------
// Buffer.write Method
const nodezbuffer6 = Buffer.alloc(8);
nodezbuffer6.write("abc"); // By default, it uses UTF-8 encoding as the second parameter.

console.log(nodezbuffer6); // <Buffer 61 62 63 00 00 00 00 00>
console.log(nodezbuffer6.toString()); // 'abc'

// -----------------------------------------------------------------------

// Buffer.toJSON Method
console.log(nodezbuffer6.toJSON()); // { type: 'Buffer', data: [97, 98, 99, 0, 0, 0, 0, 0] }
console.log(typeof nodezbuffer6.toJSON()); // 'object'

// -----------------------------------------------------------------------

// Slice Method
const nodeBufferSlice = Buffer.from("Hello World");
console.log(nodeBufferSlice.slice(0, 5).toString()); // 'Hello' - Note: This method is deprecated. Use `subarray` instead.
console.log(nodeBufferSlice.slice(5).toString()); // ' World'

// Subarray Method (Preferred over slice due to deprecation)
console.log(nodeBufferSlice.subarray(2).toString()); // 'llo World' - Creates a subarray starting from index 2.

// -----------------------------------------------------------------------

// Buffer.copy Method
const nodeBufferCopyMethod = Buffer.from("Hello Iam Sipun Kumar");
const newBuffer = Buffer.alloc(20);

// Copy data into `newBuffer` starting at offset 2. Copying begins from index 5 of `nodeBufferCopyMethod`.
nodeBufferCopyMethod.copy(newBuffer, 2, 5); 
// Example: 2nd argument is the offset in `newBuffer`. Copying starts after index 5 of the source buffer.

// Another example:
// nodeBufferCopyMethod.copy(newBuffer, 2, 0, 5);
// Here, the 2nd argument refers to the offset in `newBuffer`, and the 3rd and 4th arguments specify the range in the source buffer (start index 0 to index 5).

console.log(newBuffer); // When using `.copy(newBuffer, 2, 5)` - <Buffer 00 00 20 49 61 6d 20 53 69 70 75 6e 20 4b 75 6d 61 72 00 00>
console.log(newBuffer.toString()); // '  Iam Sipun Kumar' - Displays the string content after copying.

console.log("Copy Result:", newBuffer.toString());

// Buffer.includes()
console.log(newBuffer.includes("Sipun")); // true
// Explanation:
// - The `includes` method checks if the specified string "Sipun" is present in the buffer.
// - It returns `true` because "Sipun" exists in `newBuffer`.

console.log(newBuffer.includes("Hello")); // false
// Explanation:
// - The `includes` method returns `false` because "Hello" is not found in `newBuffer`.

console.log(newBuffer.includes("Sipun", 3)); // true
// Explanation:
// - The second argument specifies the starting index for the search.
// - Here, the search for "Sipun" begins at index 3, and it is still found in the buffer, so the method returns `true`.

// console.log(newBuffer.includes("Sipun", 3, "utf-16le")); // false
// Explanation:
// - The third argument specifies the encoding to use when interpreting the string "Sipun".
// - Here, the encoding is set to 'utf-16le' (UTF-16 Little Endian).
// - Since `newBuffer` was created using the default 'utf-8' encoding, the search with 'utf-16le' does not match, resulting in `false`.

// Buffer.fill()

const newBuffer1 = Buffer.alloc(4);
newBuffer1[0] = 97; // ASCII value for 'a'
newBuffer1[1] = 98; // ASCII value for 'b'
newBuffer1[2] = 99; // ASCII value for 'c'
newBuffer1[3] = 104; // ASCII value for 'h'

console.log(newBuffer1); // <Buffer 61 62 63 68> - Displays the buffer's content in hexadecimal format.
console.log(newBuffer1.readInt8()); // 97
console.log(newBuffer1.readInt8(2)); // 99
// Explanation:
// - The `readInt8` method reads the first byte (at index 0) as a signed 8-bit integer.
// - The value at index 0 is 97, which corresponds to the ASCII code for the character 'a'.
// - The value at index 2 is 99, which corresponds to the ASCII code for the character 'c'.

console.log(newBuffer1.readInt16LE(0)); // 25185
// Explanation:
// - The `readInt16LE` method reads two bytes starting from the specified offset (index 0 in this case) as a signed 16-bit integer in **little-endian** format.
// - At index 0, the buffer contains the bytes `0x61` (97) and `0x62` (98).
// - In little-endian format, the least significant byte (`0x61`) comes first, followed by the most significant byte (`0x62`).
// - Combined, this forms the value `0x6261`, which is equal to **25185** in decimal.

const nodeBufferX = Buffer.alloc(8);

console.log(nodeBufferX); // <Buffer 00 00 00 00 00 00 00 00>
// nodeBufferX.writeInt16LE(0x97, 0) 
// Explanation:
// - Writes `0x97` (151 in decimal) to the buffer as a signed 16-bit integer in **little-endian** format starting at index 0.
// - Little-endian means the least significant byte comes first, so the buffer becomes <Buffer 65 00 00 00 00 00 00 00>.

nodeBufferX.writeInt16BE(0x97, 0); 
// Explanation:
// - Writes `0x97` (151 in decimal) to the buffer as a signed 16-bit integer in **big-endian** format starting at index 0.
// - Big-endian means the most significant byte comes first, so the buffer becomes <Buffer 00 97 00 00 00 00 00 00>.

nodeBufferX.writeInt16BE(0x97, 1);
// Explanation:
// - Writes `0x97` (151 in decimal) starting at index 1 as a signed 16-bit integer in **big-endian** format.
// - It overwrites the bytes at index 1 and 2 with `0x00` and `0x97`, respectively.
// - The previous value of `0x97` at index 0 is unaffected, but because the write starts at index 1, it does not overwrite the previous data at index 0, leading to <Buffer 00 00 97 00 00 00 00 00>.

nodeBufferX.writeInt16BE(0x98, 2);
// Explanation:
// - Writes `0x98` (152 in decimal) starting at index 2 as a signed 16-bit integer in **big-endian** format.
// - The buffer becomes <Buffer 00 97 00 98 00 00 00 00>.

console.log(nodeBufferX);
// Final Buffer State: The buffer shows the changes from the above write operations.

const nodeBufferY = Buffer.from("ABCDEFG")
console.log(nodeBufferY);  // <Buffer 41 42 43 44 45 46 47>
console.log(nodeBufferY.at(3)); // 68
console.log(nodeBufferY.at(0)); // 65


// Properties 
console.log(nodeBuffer.buffer);
console.log(nodeBuffer.byteLength);
console.log(nodeBuffer.byteOffset);
console.log(nodeBuffer.length);
