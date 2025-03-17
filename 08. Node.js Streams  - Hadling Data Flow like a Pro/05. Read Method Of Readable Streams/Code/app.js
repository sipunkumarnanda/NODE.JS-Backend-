import fs from 'fs';

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });

// Readable event listener
readStream.on("readable", () => {
    // Logs the current size of the internal buffer.
    // Initially, it's 4 bytes because we set the highWaterMark to 4.
    console.log(readStream.readableLength);  // Logs: 4
    
    // Reads 1 byte of data from the internal buffer. 
    // The internal buffer size is initially 4 bytes, so after reading 1 byte, 
    // the remaining data in the buffer would be 3 bytes.
    console.log(readStream.read(1));  // Logs: the first byte of data (could be a Buffer)

    //  Logs the remaining length of data in the internal buffer after calling read(1).
    // Since 1 byte was read from the 4-byte buffer, the new buffer size should be 3, not 0.
    console.log(readStream.readableLength);  // Logs:  3
});





/*
Output

4
<Buffer 41>
3
7
<Buffer 42>
6
*/
