import fs from 'fs'

// const writeStream = fs.createWriteStream("file.mp4")
// const writeStream = fs.createWriteStream("file.txt", {highWaterMark: 4})

// console.log(writeStream.writableHighWaterMark);  // Bydefault Size : 16 KB 


// writeStream.write('abc')
// writeStream.write('ABC')
// writeStream.write('123')

//------------------------------------------------------------------------------
const writeStream = fs.createWriteStream("file.mp4")
// ------------------------------------------------------------------------------

console.time()

const readStream = fs.createReadStream("C:\\Users\\Sipun Kumar Nanda\\OneDrive\\Desktop\\3. Igniting our App (HD Video).mp4", {highWaterMark: 1 * 1024 * 1024})

readStream.on("data", (chunkBuffer) => {
  // fs.appendFileSync('data.mp4', chunkBuffer)
  // File size : 1.5 GB
  // Memory : 42 MB
  // cpu : 20%
  // default Time : 5.224s

  writeStream.write(chunkBuffer)
  // File size : 1.5 GB
  // Memory : 1 GB
  // cpu : 16%
  // default Time : 1.867s
});

readStream.on("end", () => {
    console.timeEnd(); 
});

