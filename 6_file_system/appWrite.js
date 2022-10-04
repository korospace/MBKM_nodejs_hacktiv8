const fs = require("fs");

let txt = "ini text untuk file output.txt hehe";

console.log("Start");
fs.writeFile('6_file_system/file/output.txt', txt, {mode: 0o444}, (err) => {
    if(err) {
        console.log("=== error ===");
        return console.log(err);
    }

    console.log("success");
})
console.log("Finish");