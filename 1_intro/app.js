const http = require('http');
const port = 8080;

http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("Hello Dunia");
    res.end();
}).listen(port);

console.log("server berjalan di port "+port);

/**
 * run comman 
 * $ node app.js
 */