// Readable Stream
// console.log(process.stdin);

// Writable Stream
// console.log(process.stdout);
// console.log(process.stderr);


// ----------------------------------------------------------------------------------

// This will throw an error because process.stdin is a readable stream, not a writable stream.
// process.stdin.write("Hello"); // ❌ Error

// This works because process.stdout is a writable stream.
process.stdout.write("Hello\n");

// Behind the scenes, console.log() internally uses process.stdout.write() 
// and automatically appends a newline character ("\n").
// console.log("Hello"); // Equivalent to process.stdout.write("Hello\n")


// ---------------------------------------------------------------------------------------
import fs from 'fs';

// Create a writable stream to write data into 'output.txt'
const writeStream = fs.createWriteStream('output.txt');

// The standard input (stdin) is a readable stream that reads data from the keyboard. 
// We can process or print the data if needed.
// process.stdin.on("data", (chunk) => {
//     // console.log("Data Received:", chunk.toString());
    
//     // Write the received input data into 'output.txt'
//     writeStream.write(chunk);
// });
// All the input text is written to the `output.txt` file, which receives data from the standard input.


// We can simplify the above process using the pipe() method, which automatically handles data transfer from the readable stream (stdin) 
// to the writable stream (writeStream).
process.stdin.pipe(writeStream);
//--------------------------------------------------------------------------------------------


process.stderr.write("Hiii Error \n")  // This is also an writable stream 




// File Descriptor 
// console.log(process.stdin.fd);  // 0
// console.log(process.stdout.fd);  // 1
// console.log(process.stderr.fd);  // 2