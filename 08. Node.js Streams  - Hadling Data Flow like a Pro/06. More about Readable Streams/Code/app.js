import fs from 'fs';

// Creating a readable stream with a buffer size of 4 bytes and UTF-8 encoding
const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4, encoding: "utf-8" }); // ✅ Encoding can be set here directly


console.log("Start");  // 🔹 This prints first because console.log is synchronous


// 🔹 `setEncoding("utf-8")` can be used to convert Buffer chunks into strings
// readStream.setEncoding("utf-8"); // ✅ Not needed since encoding is already set in options


// 🔹 'data' event fires whenever a chunk of data is read
readStream.on("data", (chunk) => {
    console.log(chunk);  // 🔹 Prints file content chunk by chunk
});


// 🔹 If `setEncoding("utf-8")` is called here, it still works because encoding applies to future chunks
// readStream.setEncoding("utf-8");


console.log("End");  // 🔹 This prints immediately after "Start" due to synchronous execution

// ❓ Q. Why do "Start" and "End" print before the file content?
// 📌 Answer in `app2.js` (Hint: The event loop first executes synchronous code before processing asynchronous tasks)


// ----------------------------------------------------------------------------------

// 🔹 'end' event fires when the stream has finished reading all data
readStream.on("end", () => {
    console.log("End Stream");  // ✅ This prints when reading is fully completed
});

// 🔹 'close' event fires when the stream is closed (after 'end' event)
readStream.on("close", () => {
    console.log("Closed");  // ✅ This prints after the 'end' event
});

// ❓ Q. Why does "End Stream" print before "Closed"?
// ✅ The 'end' event indicates **all data has been read**, but the stream is still open.
// ✅ The 'close' event fires only **after the stream has been fully closed**.

// ----------------------------------------------------------------------------------

// 🔹 'error' event fires when an error occurs while reading the file
readStream.on("error", (error) => {
    console.log(error);  // ✅ Logs any errors related to file reading
});

// Destroying the stream with an error message
readStream.destroy("Error occurred"); // ❌ This will trigger the 'error' event immediately

// ----------------------------------------------------------------------------------

// 🔹 'open' event fires when the file is successfully opened
readStream.on("open", (data) => {
    console.log("Opened", data);  // ✅ `data` here is the file descriptor (a number representing the open file)
});

// 🔹 'ready' event fires when the stream is fully ready for reading
readStream.on("ready", (data) => {
    console.log("Ready", data);
});

/*
📌 **Key Takeaways:**
✅ 'data' event fires whenever a chunk is read.
✅ 'end' event fires when all data has been read.
✅ 'close' event fires when the stream is closed.
✅ 'error' event fires when an error occurs.
✅ 'open' event fires when the file is opened (returns a file descriptor).
✅ 'ready' event fires when the stream is ready for reading.
✅ Destroying the stream with `.destroy("Error occurred")` triggers an error event.
*/
