import fsPromises from 'fs/promises';

// Asynchronous I/O Example
setTimeout(() => {
    console.log("Hii");
}, 0);

// The following is an example of asynchronous I/O:
const fileContent = await fsPromises.readFile("file.txt", "utf-8");
console.log(fileContent);
console.log("123");


// Output:
// Hii
// [Content of file.txt]

// Explanation:
// In Node.js, asynchronous I/O operations do not block the execution of other code. 
// Here, `setTimeout` is executed first but does not block the execution of `readFile`. 
// However, since `setTimeout` completes first due to its shorter duration, "Hii" is printed before the file content. 
// Node.js uses asynchronous, non-blocking I/O to handle such operations efficiently.

//------------------------------------------------------------------

// Synchronous I/O Example
// import fs from 'fs';

// setTimeout(() => {
//     console.log("Hii");
// }, 0);

// // The following is an example of synchronous I/O:
// const fileContentSync = fs.readFileSync("file.txt", "utf-8");

// console.log(fileContentSync);

// Output:
// [Content of file.txt]
// Hii

// Explanation:
// In this case, `readFileSync` is a synchronous operation and blocks the execution of the program 
// until the file content is fully read. As a result, the `setTimeout` callback ("Hii") is delayed 
// and executed only after the synchronous file operation is complete.
//
// Node.js, despite being single-threaded, allows synchronous I/O for scenarios where blocking operations are acceptable.

//-----------------------------------------------------------------------

// Example: Asynchronous I/O with `fs.readFile`
// import fs from 'fs';

// // Schedule a non-blocking operation using `setTimeout`
// setTimeout(() => {
//     console.log("Hii"); // This is scheduled as a non-blocking operation to execute after 0ms.
// }, 0);

// // Perform an asynchronous file read using `fs.readFile`
// fs.readFile("file.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err); // Logs an error if the file cannot be read.
//         return;
//     }
//     console.log(data); // Logs the content of the file once it is read.
// });
// console.log("123");

// **Output:** 
// 1. Hii
// 2. <Content of file.txt>
//
// Explanation of the Output:
// - `setTimeout` schedules its callback to run after 0 milliseconds, but the exact execution depends on the event loop.
// - Since `fs.readFile` is asynchronous, it begins reading the file in the background while the event loop continues executing other tasks.
// - The `setTimeout` callback ("Hii") gets executed first because it is added to the event queue with a minimal delay (0ms). 
// - Once the file reading is complete, the callback of `fs.readFile` is executed, printing the content of the file.
//
// Key Takeaways:
// 1. Node.js uses an **event loop** to manage asynchronous operations like `setTimeout` and `fs.readFile`.
// 2. Asynchronous I/O is non-blocking, meaning it doesn't hold up the execution of other code while waiting for I/O tasks to complete.
// 3. Callbacks (like the ones for `setTimeout` and `fs.readFile`) are executed when their associated tasks are finished.
