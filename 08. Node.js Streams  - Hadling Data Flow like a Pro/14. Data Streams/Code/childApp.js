console.log("Hello iam a child app");


import fs from 'fs';
const writeStream = fs.createWriteStream('child.txt')

process.stdin.on("data", ((chunk)=>{
    writeStream.write(chunk)
}))