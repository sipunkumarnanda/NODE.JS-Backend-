import fs from 'fs'

console.time()

const readStream = fs.createReadStream("C:\\Users\\Sipun Kumar Nanda\\Downloads\\Game.Changer.2025.720p.HEVC.DS4K.WEB-DL.Hindi.5.1-Telugu.x265-HDHub4u.Tv.mkv", {highWaterMark : 1 * 1024 * 1024})

const writeStream = fs.createWriteStream('streams.mp4', {highWaterMark : 1 * 1024 * 1024})

// with manual handle 
// readStream.on('data', ((chunkBuffer)=>{
//    const isTrue =  writeStream.write(chunkBuffer)

//    if(!isTrue){
//     readStream.pause()
//    }
// }))

// writeStream.on("drain", (()=>{
//     readStream.resume()
//    }))


// We can do the above thing using pipe 

readStream.pipe(writeStream)

// readStream.unpipe(writeStream) Stop 

setTimeout(() => {
    readStream.unpipe(writeStream)
}, 1000);

writeStream.on("unpipe", (()=>{
    console.log("Unpiped Now ");
}))

readStream.on("end", (()=>{
    writeStream.end()
}))

writeStream.on("close", (()=>{
    console.log("Closed");
    console.timeEnd()
}))