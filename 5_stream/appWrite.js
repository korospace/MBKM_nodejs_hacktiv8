const fs = require("fs");
const data = "Ini Pesan yang dibuat dengan writeStream haha";

const writeStream = fs.createWriteStream("5_stream/appWrite.txt");

writeStream.write(data,"utf8");
writeStream.end();

writeStream.on("finish", () => {
    console.log("file created");
})

writeStream.on("error", (err) => {
    console.log(err.stack);
})

console.log("program finished");