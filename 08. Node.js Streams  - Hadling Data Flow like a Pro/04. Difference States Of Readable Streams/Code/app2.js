import fs from 'fs'

const readStream = fs.createReadStream("chars.txt", {highWaterMark: 4})

/*
readStream.on("data", (chunkBuffer) => {
    fs.writeFileSync("new.txt", chunkBuffer);  // Writes data to the file, but overwrites it with each chunk. 
    // This happens because writeFileSync replaces the entire file content each time it is called, 
    // so only the last chunk of data (4 bytes) will remain in the file.
  });
*/

// ----------------------------------------------------------------------------------


/// Here, we are implementing a feature that ensures if we rerun the program, 
// the existing file is cleared before writing new data using `appendFileSync`.

// This means:
// - On the first chunk, we use `writeFileSync()` to **clear all existing data** and then write the new data.
// - For subsequent chunks, we use `appendFileSync()` to append data to the file.

let readCount = 0;

readStream.on("data", (chunkBuffer) => {
    readCount++;

    if (readCount === 1) {
        // Overwrite the file on the first chunk (clears all existing data first)
        fs.writeFileSync('new.txt', chunkBuffer);
    } else {
        // Append data to the file for subsequent chunks
        fs.appendFileSync("new.txt", chunkBuffer);
    }

    // Pause the stream temporarily
    readStream.pause();

    // Resume the stream after a delay of 1 second
    setTimeout(() => {
        readStream.resume();
    }, 1000);
});

// Implementing the same feature **without using an extra variable** like `readCount`
// can be found in `app3.js`.
