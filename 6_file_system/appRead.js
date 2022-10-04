const fs = require("fs");

console.log("Start");
fs.readFile("6_file_system/file/kode.txt",{encoding:"utf8"}, (err,data) => {
    if (err) {
        console.log("== error ==");
        return console.error(err);
    }

    console.log(data);
})
console.log("Finish");