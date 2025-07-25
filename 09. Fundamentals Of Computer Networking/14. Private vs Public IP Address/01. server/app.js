
import http from 'http';

const server = http.createServer((req,res)=>{
    res.end("Hello world")
})

server.listen(4000, '0.0.0.0', ()=>{
    console.log("server is running on  localhost, port 4000");
})


// 0.0.0.0 wirld card entry 
// here it start all 16 million ip addresses , jitne bhi ip addresses available hai (all local host ip address)
// loop back