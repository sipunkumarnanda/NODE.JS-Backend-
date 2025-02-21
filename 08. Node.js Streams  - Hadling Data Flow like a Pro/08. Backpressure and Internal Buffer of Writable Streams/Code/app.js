import fs from 'fs'
import { getDefaultHighWaterMark } from 'stream'

const writeStream = fs.createWriteStream('file2.txt', {highWaterMark : 4})

console.log("writableHighWaterMark : ", writeStream.writableHighWaterMark);  // 4

console.log(writeStream.writableLength);
let isEmpty = writeStream.write('a')
console.log(isEmpty);

console.log(writeStream.writableLength);
isEmpty = writeStream.write('a')
console.log(isEmpty);

console.log(writeStream.writableLength);
isEmpty = writeStream.write('a')
console.log(isEmpty);

console.log(writeStream.writableLength);
isEmpty = writeStream.write('a')
console.log(isEmpty);

console.log(writeStream.writableLength);
isEmpty = writeStream.write('a')
console.log(isEmpty);

// 📝 `writeStream.write()` returns a boolean: `true` if the buffer can accept more data, `false` if it's full and needs to be drained.

// DOing Same thing using loop

// for(let i= 0 ; i<= 4 ; i++){
//     console.log(writeStream.writableLength);
//     let isEmpty = writeStream.write('a')
//     console.log(isEmpty);
// }
// console.log("writableLength : ",writeStream.writableLength);


// If we give some time to the internal buffer, it will process the written data, 
// get flushed, and free up space for new writes.

// setTimeout(()=>{
//     console.log(writeStream.writableLength);
//     let isEmpty = writeStream.write('a')
//     console.log(isEmpty);
//     console.log(writeStream.writableLength)
// },1000)

console.log("writableHighWaterMark : ", writeStream.writableHighWaterMark);  // 4





// -----------------------------------------------------------
console.log("-----------------------------------------------------------");

// for(let i= 0 ; i<= 40 ; i++){
//     console.log(writeStream.writableLength);
//     let isEmpty = writeStream.write('a')
//     if(!isEmpty){
//         console.log("Its break Now ");
//         break;
//     }
//     console.log(isEmpty);
// }

// setTimeout(() => {
//     console.log(writeStream.writableLength);
// }, 1000);


// writeStream.on('drain', (()=>{
//     console.log("drain : ", writeStream.writableLength);
// }))

// Drain event is fire when writa stream's internal buffer is free

let i = 1 

while(i<=1000){
    console.log("I is : ", i);
    console.log(writeStream.writableLength);
    let isEmpty = writeStream.write('a')
    i++
    if(!isEmpty){
        break;
    }
    console.log(isEmpty);
   
}

writeStream.on('drain', (()=>{
    console.log("drain : ", writeStream.writableLength);
    while(i<=1000){
        console.log("I is : ", i);
        console.log(writeStream.writableLength);
        let isEmpty = writeStream.write('a')
        i++
        if(!isEmpty){
            break;
        }
        console.log(isEmpty);
    }
}))


/*
writeStream.writableHighWaterMark; // 📝 The maximum buffer size before `write()` starts returning `false`.

writeStream.writableLength; // 📝 The current size of queued/buffered data waiting to be written.

writeStream.write(); // 📝 Writes data to the stream, returns `true` if the buffer can take more, `false` if it needs draining.

*/