

// run a server on 127.0 's any address 

const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end("Hello, this is a basic HTTP server on 127.0.0.2\n")
})

server.listen(3000, '127.0.0.2', (()=>{
    console.log("server is listening on http://127.0.0.2:3000");
}))