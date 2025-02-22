import fs from 'fs'

console.time()

const readStream = fs.createReadStream("C:\\Users\\Sipun Kumar Nanda\\Downloads\\Game.Changer.2025.720p.HEVC.DS4K.WEB-DL.Hindi.5.1-Telugu.x265-HDHub4u.Tv.mkv", {highWaterMark : 1 * 1024 * 1024})

const writeStream = fs.createWriteStream('data.mp4', {highWaterMark : 1 * 1024 * 1024})


readStream.pipe(writeStream)

setTimeout(() => {
    readStream.destroy("Khatam Tata By By")
}, 1000);

readStream.on('end', (()=>{
    console.timeEnd()
}))

setInterval(() => {
    console.log("Hii");
}, 100);

// After 1 second, the readStream will be destroyed, causing the Node.js application to crash, 
// and the setInterval function will also stop.

// The Node.js application crashes because the pipe method does not have an error handling mechanism.


// There is a way to handle the error by using error events on readstream . 

readStream.on('error', ((err)=>{
    console.log(err);
}))


// there is no another wany to handle error in pipe method , so we can handle error using pipeline method which we import from stream module - import {pipeline} from "stream" . Refer app2.js 