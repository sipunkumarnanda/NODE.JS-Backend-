import fs from "fs";

// Creating a readable stream to read a large file in chunks
const readStream = fs.createReadStream(
    "C:\\Users\\Sipun Kumar Nanda\\OneDrive\\Desktop\\Squid.Game.S02.720p.10Bit.WEB-DL.Hindi.5.1-English.2.0.ESub.x264-HDHub4u.Tv.zip",
    { highWaterMark: 100 * 1024 * 1024 } // Setting buffer size to 100 MB (100 * 1024 * 1024 bytes)
);

// Event listener for the 'data' event, which triggers when a chunk is read
readStream.on("data", (chunkBuffer) => {
    console.log(chunkBuffer); // Logs the chunk of data being read
    console.log(chunkBuffer.byteLength); // Logs the size of the current chunk in bytes
});

/**
 * Notes:
 * 1️⃣ By default, Node.js uses a buffer size of **64 KB (65536 bytes)** for streams.
 * 2️⃣ The `highWaterMark` option allows us to explicitly set the buffer size.
 * 3️⃣ In this example, we set `highWaterMark` to **100 MB** (100 * 1024 * 1024 bytes).
 * 4️⃣ A larger buffer size means fewer read operations, which can improve performance for large files.
 * 5️⃣ However, setting a very high buffer size may consume excessive memory.
 */
