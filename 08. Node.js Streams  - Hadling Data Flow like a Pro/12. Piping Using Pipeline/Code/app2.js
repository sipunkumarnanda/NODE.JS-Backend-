import fs, { read } from 'fs'
import { pipeline } from 'stream'

console.time()

const readStream = fs.createReadStream("C:\\Users\\Sipun Kumar Nanda\\Downloads\\Game.Changer.2025.720p.HEVC.DS4K.WEB-DL.Hindi.5.1-Telugu.x265-HDHub4u.Tv.mkv", {highWaterMark : 1 * 1024 * 1024})

const writeStream = fs.createWriteStream('data.mp4', {highWaterMark : 1 * 1024 * 1024})

pipeline(readStream, writeStream, ((err)=>{
    console.log(err);
}))

setTimeout(() => {
    readStream.destroy("Khatam tata by by")
}, 1000);

setInterval(() => {
    console.log("Hello");
}, 100);

readStream.on("end", (()=>{
    console.timeEnd()
}))