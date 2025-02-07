import fs, { createReadStream, read } from 'fs'

const writeStream = fs.createWriteStream("file.txt", {writableHighWaterMark: 4})

// console.log(writeStream.writableHighWaterMark);  // Bydefault Size : 16 KB 


writeStream.write('abc')
writeStream.write('ABC')
writeStream.write('123')