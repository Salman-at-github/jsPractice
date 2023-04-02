const http = require('http');
const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req,res)=> {
    console.log(req.url); //this show whatver req we hit at the url localhost:port/whatever
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/html');
    res.end("Hello whatever")
})

server.listen(port,hostname,()=> console.log(`Server established on http://${hostname}:${port}`))