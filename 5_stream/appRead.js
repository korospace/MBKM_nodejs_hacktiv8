const fs = require("fs");
var data = "";

let streamReader = fs
    .createReadStream('5_stream/appRead.txt')
    .setEncoding("utf8");

streamReader.on("data", chunk => {
    data += chunk;
})

streamReader.on("end", () => {
    console.log("file created:");
    console.log(data);
})

streamReader.on("error", err => {
    console.log(err.stack);
})

console.log("program finished");

/**
 * TIPS: If you dont need write path fully
 * 
 * var path = require('path');
 * let streamReader = fs
 *     .createReadStream(path.join(__dirname, 'app.txt'))
 *     .setEncoding("utf8");
*/