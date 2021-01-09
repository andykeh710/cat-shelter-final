console.log("cat shelter")
const http = require('http');
const port = 3000;

http.createServer((req, res) =>{
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });

    res.write('Hello JS WORLD!');
    res.end();
}).listen(port);