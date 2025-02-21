import fs from 'fs';

const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 }) 
// Creates a writable stream with a highWaterMark (buffer size) of 4 bytes.
// This means data will be buffered in chunks of 4 bytes before being written to the file.

// ------------------ Writable Property ------------------

// writeStream.write("a")
// console.log(writeStream.writable); // Checks if the stream is still writable
// writeStream.end() // Ends the writable stream, meaning no more writes can happen
// console.log(writeStream.writable); // After calling end(), writable will be false

// ------------------ Cork & Uncork ------------------

writeStream.cork() 
// Corking the stream allows multiple write operations to be buffered
// This prevents immediate writing and optimizes performance by reducing I/O operations

writeStream.write("a")
writeStream.write("a")
writeStream.write("a")
writeStream.write("a")
writeStream.write("a") 
// All these writes are buffered inside the stream due to cork() and will not be flushed to the file immediately.

console.log(writeStream.writableCorked); // Output: 1 => Indicates that writes are still buffered

writeStream.uncork() 
// Calling uncork() flushes the buffered writes, meaning the data will now be written to the file

console.log(writeStream.writableCorked); // Output: 0 => No more buffered writes

// ------------------ Ended State ------------------

writeStream.end() 
// The end() method signals that no more data will be written to the stream
// After calling end(), writableEnded becomes true, but the data might still be in the process of being written.

console.log(writeStream.writableEnded); // Output: true => Indicates that end() has been called

// ------------------ Finished State ------------------

console.log(writeStream.writableFinished); // Output: false => Stream is still in the process of writing
console.log(writeStream.writableFinished); // Output: false => Still not finished writing to the file
console.log(writeStream.writableLength);  // Output: 5 => Data is still in the internal buffer, waiting to be written to disk

setTimeout(() => {
    console.log(writeStream.writableFinished); // Output: true => Now fully finished, all data written to disk
    console.log(writeStream.writableLength);  // Output: 0 => No remaining data in buffer
}, 1000);

// ------------------ Error State ------------------

// A writable stream can enter an error state if something goes wrong during writing.
// Common causes of errors:
// 1. Writing to a file that does not have write permissions
// 2. The disk is full, preventing further writes
// 3. Attempting to write after the stream has been destroyed
// 4. An unexpected failure in the filesystem

writeStream.on("error", (err) => {
    console.error("Stream error:", err);
    // Always handle errors in streams to prevent the application from crashing
});

// If an error occurs, the writableFinished or writableEnded properties might not behave as expected.
// For example, if an error happens before all data is written, writableFinished might remain false indefinitely.
