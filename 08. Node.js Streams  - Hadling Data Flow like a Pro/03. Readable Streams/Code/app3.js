import fs from "fs";

console.time()

// Creating a read stream with a custom buffer size of 100MB (highWaterMark)
const readStream = fs.createReadStream('chars.txt', {highWaterMark: 16})

let readCount = 0
readStream.on("data", (chunkBuffer) => {
    console.log(chunkBuffer);  // Logs the chunk of data being read
    console.log(chunkBuffer.toString("utf-8"));
    console.log(chunkBuffer.byteLength);  // Logs the size of the current chunk in bytes (Default size: 65536 Bytes / 64 KB)

    readCount++
})

readStream.on("end", (()=>{
    console.log("Read Count is : ",readCount);
}))