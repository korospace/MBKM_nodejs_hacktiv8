var fs = require("fs");
var zlib = require("zlib");

 /**
 * Read & Write
 */
fs
    .createReadStream("5_stream/appRead.txt")
    .pipe(fs.createWriteStream("5_stream/appPipe.txt"))

/**
 * Read & Write Zip
 */
fs
    .createReadStream("5_stream/appRead.txt")
    .pipe(zlib.createGzip().on("end", () => unzipper()))    
    .pipe(fs.createWriteStream("5_stream/appPipeZip.gz"))

/**
 * Read & Write Unzip
 */
function unzipper() {
    fs
    .createReadStream("5_stream/appPipeZip.gz")
    .pipe(zlib.createGunzip())    
    .pipe(fs.createWriteStream("5_stream/appPipeUnzip.txt"));
}

console.log("program ended");