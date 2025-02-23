import fs from 'fs'

console.log("Hello Babe Iam from child app....!!");


const writeStream = fs.createWriteStream('data.txt')

process.stdin.on("data", ((chunk)=>{
    console.log(chunk.toString());
    // writeStream.write(chunk)  // we write bellow using pipe method 
}))

process.stdin.pipe(writeStream)
// Now its standrd input set to app.js because this file runs by spawn method from app.js , so it's input coming from app.js