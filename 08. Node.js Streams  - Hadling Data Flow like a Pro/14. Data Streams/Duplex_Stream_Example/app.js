import fs from 'fs'
import { spawn } from 'child_process'

const writeStream = fs.createWriteStream("textfrom.txt")

const childprocess = spawn('cat', ['output.txt'])

childprocess.stdout.on("data", ((chunk)=>{
    console.log(chunk.toString());
}))

// Here we writing to another file using stdout which is an duplex stream , most of the time its working as writable stream 
childprocess.stdout.pipe(writeStream)




// Running Node app using spawn 

const processTwo = spawn('node', ['childApp.js'])

processTwo.stdout.on("data", ((chunk)=>{
    console.log(chunk.toString());
}))


// Here childApp.js output is coming to this processTwo because the childApp process is run from this file using spawn so now standrd output for childApp is spawn (who start the process) , so output is come to processTwo 

// The output of childApp.js is captured by processTwo because it was started using spawn. This means the standard output (stdout) of childApp.js is redirected to processTwo, allowing us to read and display it in this parent process.

// Also we can write data to childprocesss using stdin

processTwo.stdin.write("Hii iam giving input from app.js to childApp.js 😂😂")  // From here to we send data to childApp.js