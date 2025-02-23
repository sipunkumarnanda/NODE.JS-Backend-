import fs from 'fs';
import { spawn } from 'child_process';

// const childProcess = spawn("cat", ["output.txt"])

// // Here stdout working as Duplex stream (working as redable stream)
// childProcess.stdout.on("data", ((chunk)=>{
//     console.log(chunk.toString());
// }))

const childProcess = spawn("node", ["childApp.js"])

// Here stdout working as Duplex stream (working as redable stream)
childProcess.stdout.on("data", ((chunk)=>{
    console.log(chunk.toString());
}))

childProcess.stdin.write("Writing from app2.js  Hiii")

