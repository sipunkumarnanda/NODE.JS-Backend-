import fs from 'fs'

const readStream = fs.createReadStream("chars.txt", {highWaterMark : 4})

console.log("Start");

// readStream.setEncoding("utf-8") // It converts the incoming internal buffer to string 

readStream.on("data", ((chunk)=>{
    console.log(chunk);
}))


// If we put this to here still it works why 
readStream.setEncoding("utf-8")

console.log("End");
// Q. Why Start and End Prints First explain ? 
// Answer in app2.js

readStream.on("end", (()=>{
    console.log("End Stream ");
}))

readStream.on("close", (()=>{
    console.log("Closed");
})) 

readStream.on("end", (()=>{
    console.log("End Stream ");
}))

// Q. Why End Stream Prints before Closed 

// Error 
readStream.on("error", ((error)=>{
    console.log(error);
}))
// Destroy Method 
readStream.destroy("Error occured")