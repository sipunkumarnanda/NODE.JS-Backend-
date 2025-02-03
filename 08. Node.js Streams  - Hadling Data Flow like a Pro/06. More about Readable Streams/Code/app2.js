import fs from 'fs';

// Creating a readable stream from 'chars.txt' with a buffer size of 4 bytes (highWaterMark: 4)
const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });

console.log("Start");  // 🔹 This prints first because console.log is a synchronous operation

// 🔹 `setEncoding("utf-8")` converts buffer chunks to a readable string format.
// readStream.setEncoding("utf-8") // If uncommented here, it will apply encoding before reading data

// Listening for 'data' events, which are emitted asynchronously when data chunks are read
readStream.on("data", (chunk) => {
    console.log(chunk); // 🔹 Prints chunks of data from the file
});

// 🔹 `setEncoding("utf-8")` is called after the 'data' event listener is registered
//    However, this still works because encoding is applied to all future data chunks.
readStream.setEncoding("utf-8");

console.log("End");  // 🔹 This prints immediately after "Start" since it's also a synchronous operation

/*
🔹 Why does "Start" and "End" print first?
   - `console.log("Start")` and `console.log("End")` are **synchronous operations**, executed immediately.
   - The `readStream.on("data", callback)` event is asynchronous, meaning it runs **only when data is available**.
   - The event loop first executes **all synchronous operations**, then processes the asynchronous file reading.
   
🔹 Why does `.setEncoding("utf-8")` still work even after the "data" event is registered?
   - The stream has not started emitting chunks when `.setEncoding("utf-8")` is called.
   - The encoding setting affects all **future** data chunks, ensuring they are emitted as strings instead of buffers.

📌 **Key Takeaways:**
   ✅ Synchronous code runs first → "Start" and "End" print before file reading begins.
   ✅ Streams work asynchronously → 'data' events trigger only when chunks are read.
   ✅ `.setEncoding("utf-8")` affects **all future chunks**, so it still works even if set after the event listener.
*/