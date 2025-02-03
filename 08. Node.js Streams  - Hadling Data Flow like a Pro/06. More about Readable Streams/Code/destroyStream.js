import { error } from 'console';
import fs from 'fs';

const readStream = fs.createReadStream("chars.txt", {highWaterMark : 4, encoding : "utf-8"});
readStream.on("data", (chunk) => {
    console.log("Received chunk:", chunk);
    // For demonstration, destroy the stream after the first chunk
    // readStream.destroy("Destroy BY Self");
});

readStream.destroy("Destroy BY Self");

readStream.on("close", () => {
    console.log("Stream has been closed.");
});

readStream.on("error", ((error)=>{
    console.log(error);
}))
