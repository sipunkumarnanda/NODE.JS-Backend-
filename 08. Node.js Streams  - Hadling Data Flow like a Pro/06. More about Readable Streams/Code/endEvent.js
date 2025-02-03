import fs from 'fs';

// Creating a readable stream with a small buffer size
const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4, encoding: "utf-8" });

console.log("Start reading file...");

// Handling 'data' event (stream is in flowing mode)
readStream.on("data", (chunk) => {
    console.log("Received chunk:", chunk);
});

// readStream.destroy("Destroied Explicitly")

// Handling 'end' event
// readStream.on("end", () => {
//     console.log("No more data to read. Stream reached the end.");
// });

// Handling 'close' event
readStream.on("close", () => {
    console.log("Stream closed.");
});

readStream.on("end", () => {
    console.log("No more data to read. Stream reached the end.");
});

readStream.on("error" , ((err)=>{
    console.log(err);
}))

// WHy end event fires first then fires close ? 

// Why end didn't fire here ? 
