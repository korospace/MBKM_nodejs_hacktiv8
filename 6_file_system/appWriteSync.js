const fs = require("fs");

let txt = "ini text untuk file outputSync.txt hehe hoho";

try {
    fs.writeFileSync("6_file_system/file/outputSync.txt",txt,{mode: 0o444});
} catch (error) {
    console.log("=== error hoho ===");
    console.log(error);
}

/**
 * Data Buffer
 */
let buffer = new Buffer(text2Binary("Nama Saya Bagas"));

try {
    fs.writeFileSync("6_file_system/file/outputBuffer.txt",buffer,{mode: 0o444});
} catch (error) {
    console.log("=== error hoho ===");
    console.log(error);
}

function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    });
}
