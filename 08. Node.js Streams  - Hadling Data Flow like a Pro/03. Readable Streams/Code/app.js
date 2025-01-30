// import fs from 'fs/promises'

// File Read Using Buffer

// console.time()
// const contentBuffer = await fs.readFile("C:\\Users\\Sipun Kumar Nanda\\OneDrive\\Desktop\\Squid.Game.S02.720p.10Bit.WEB-DL.Hindi.5.1-English.2.0.ESub.x264-HDHub4u.Tv.zip")  // Error - Larger than 2GiB

// const contentBuffer = await fs.readFile("C:\\Users\\Sipun Kumar Nanda\\OneDrive\\Desktop\\1-How To Start A Start-Up _ 10 Day MBA Day- 1 _ Dr Vivek Bindra.mp4") // 1.11GiB

// console.log(contentBuffer.byteLength);

// fs.writeFile('squidGame.zip', contentBuffer)
// await fs.writeFile('10_Days_MBA_Day_1.mp4', contentBuffer)

// console.timeEnd()

// The above program took approximately 4.92 seconds
// Memory Usage: 1161 MB
// CPU Usage: 11%

// ----------------------------------------------------------------------------------

// File Read Using Streams
import fs from "fs";

console.time()

// Creating a read stream with a custom buffer size of 100MB (highWaterMark)
const readStream = fs.createReadStream("C:\\Users\\Sipun Kumar Nanda\\OneDrive\\Desktop\\Squid.Game.S02.720p.10Bit.WEB-DL.Hindi.5.1-English.2.0.ESub.x264-HDHub4u.Tv.zip", {highWaterMark: 100 * 1024 * 1024})

let readCount = 0

readStream.on("data", (chunkBuffer) => {
    console.log(chunkBuffer);  // Logs the chunk of data being read
    console.log(chunkBuffer.byteLength);  // Logs the size of the current chunk in bytes (Default size: 65536 Bytes / 64 KB)

    // Write the chunk to a new file Using appendFileSync
    fs.appendFileSync('data.zip', chunkBuffer)

    readCount++ 

    // End the process if the chunk size is less than the specified buffer size
    // if (chunkBuffer.byteLength < 100 * 1024 * 1024) {
    //     console.timeEnd()  // Ends the time measurement
    // }
})

readStream.on("end", () => {
    // This event is triggered when the entire file has been read successfully.
    
    console.log("Read Count is:", readCount); // Logs the total number of chunks read.
    
    console.timeEnd(); // Ends the timer and logs the total time taken for the operation.
});
