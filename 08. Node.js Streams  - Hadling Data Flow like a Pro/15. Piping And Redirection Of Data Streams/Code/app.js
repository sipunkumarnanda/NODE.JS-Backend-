process.stdin.setEncoding("utf-8")

process.stdin.on("data", ((chunk)=>{
    // console.log(chunk.toString());
    console.log("APP.JS : ",chunk);
    // console.log(chunk.toString().trim()); // Removes the newline

    
}))

// Output - <Buffer 48 69 0a>   Here 0a means newline \n in ASCII



