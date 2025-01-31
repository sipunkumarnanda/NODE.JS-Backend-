import fs from 'fs'

const readStream = fs.createReadStream("chars.txt")

// Initial State 
/*
// Check if the stream is currently flowing. If it's null, it's in its initial state.
console.log(readStream.readableFlowing);

// Check if the stream has finished reading. If false, it means the stream hasn't ended yet.
console.log(readStream.readableEnded);

// Check if the stream is currently paused. If false, it means the stream is not paused.
console.log(readStream.isPaused());
*/


// Flowing State 
/*
readStream.on("data", (chunkBuffer) => {
    console.log(chunkBuffer);  // Logs the chunk of data being read
  
    readStream.pause();  // Pauses the stream after the first chunk is read
  
    console.log(readStream.readableFlowing);   // Check if the stream is currently flowing. It should be false after pause.
   
    console.log(readStream.readableEnded);  // Check if the stream has finished reading. It should be false if it hasn't ended.
  
    // Check if the stream is paused. It should be true since we called pause().
    console.log(readStream.isPaused());  
  });
*/

// Ended State

// Listening to 'data' event to read the file chunks
readStream.on("data", (chunkBuffer) => {
    // Process the chunkBuffer here if needed (e.g., log or manipulate)
  });
  
  // Listening to 'end' event to check the state once the stream has finished reading
  readStream.on("end", () => {
    // After the stream has ended, check if it is still flowing
    console.log(readStream.readableFlowing);  // Should be null or false after stream ends
    
    // Check if the stream has ended. Should return true after the stream has read all the data.
    console.log(readStream.readableEnded);  // Should be true once the stream finishes
  
    // Check if the stream is paused. Should be false as the stream has ended.
    console.log(readStream.isPaused());  // Should be false as the stream is not paused at the end
  });
  