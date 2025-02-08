import fs from 'fs';

const writeStream = fs.createWriteStream("file.txt", {highWaterMark : 4});

// console.log(writeStream.writableHighWaterMark);  
// Default writable buffer size is 16 KB

// Writing data to the writable stream
// writeStream.write('abc');
// writeStream.write('ABC');
// writeStream.write('123');

// The following setTimeout calls attempt to write data with a delay
// setTimeout(() => {
//     writeStream.write('abc');
// }, 1000);
// setTimeout(() => {
//     writeStream.write('ABC');
// }, 2000);
// setTimeout(() => {
//     writeStream.write('123');
// }, 3000);

/**
 * ❓ Q: Why does the `write()` method not write data one by one?
 * Instead, it writes everything at once after a delay.
 *
 * ✅ Explanation:
 * - `writeStream.write()` writes data to an internal buffer instead of immediately writing to the file.
 * - The actual writing happens asynchronously and is influenced by the internal buffering mechanism.
 * - Node.js optimizes I/O operations and batches writes for efficiency.
 * - Data is written to the file when:
 *   1️⃣ The internal buffer reaches its highWaterMark (default: 16 KB).
 *   2️⃣ `writeStream.end()` is called.
 *   3️⃣ The stream is manually drained.
 *
 * - Since the data chunks are small, they get stored in the buffer instead of immediately being flushed to the file.
 * - When the event loop allows, all buffered data is written at once.
 */


// ----------------------------------------------------------------------------------------------------

const readStream = fs.createReadStream('chars.txt', { highWaterMark: 4 }); // Setting the buffer size to 4 bytes

// Listening for 'data' event, which is triggered when a chunk of data is available
readStream.on("data", (chunk) => {
    console.log(chunk.toString()); // Converts and logs the chunk as a string
    
    writeStream.write(chunk); // Writes the chunk to the writable stream

    readStream.pause(); // Pauses the stream after receiving a chunk

    // Resumes the stream after 1 second
    setTimeout(() => {
        readStream.resume();
    }, 1000);
});

/**
 * 🔹 **Why does `writeStream.write(chunk)` not write one by one but writes everything at once?**
 * 
 * 1️⃣ The `writeStream.write()` method **writes data to an internal buffer** before actually flushing it to the file.
 * 2️⃣ Since `writableHighWaterMark` (default **16 KB**) is **much larger** than 4 bytes, 
 *     the writable stream can **buffer multiple writes** before flushing.
 * 3️⃣ As a result, all `write()` calls get **buffered first**, and data is **flushed to the file** in batches rather than one by one.
 * 4️⃣ If you want to ensure each write is handled individually, you need to:
 *     - Use `writeStream.end()` after each write.
 *     - Manually handle backpressure using the `'drain'` event.
 */
