import fs from 'fs';

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });

readStream.on("data", (chunkBuffer) => {
    console.log(readStream.bytesRead); // Logs the total number of bytes read so far
    console.log(readStream.readableHighWaterMark); // Logs the buffer size (set to 4 bytes)

    // Since `bytesRead` keeps increasing with every chunk, 
    // the condition `readStream.bytesRead === readStream.readableHighWaterMark` 
    // will only be `true` for the first chunk. This will cause overwriting of the file in the first chunk.
    
    if (readStream.bytesRead === readStream.readableHighWaterMark) {
        // Overwrites the file with the first chunk (clears all existing data before writing)
        fs.writeFileSync('new.txt', chunkBuffer);
    } else {
        // Appends data to the file for subsequent chunks
        fs.appendFileSync("new.txt", chunkBuffer);
    }

    // Pause the stream temporarily
    readStream.pause();

    // Resume the stream after a delay of 1 second to slow down writing
    setTimeout(() => {
        readStream.resume();
    }, 1000);
});

/**
 * 🔹 Explanation:
 * 1️⃣ `highWaterMark: 4` → Sets the buffer size to 4 bytes, meaning data is read in 4-byte chunks.
 * 2️⃣ `readStream.bytesRead` → Tracks the total number of bytes read so far.
 * 3️⃣ `readStream.readableHighWaterMark` → Stores the buffer size (4 bytes in this case).
 * 4️⃣ On the first chunk, `writeFileSync()` is used to clear the file and write data.
 * 5️⃣ For subsequent chunks, `appendFileSync()` is used to add data without overwriting.
 * 6️⃣ The stream is paused and resumed after 1 second to slow down the writing process.
 */
