const fs = require("fs");

try {
    const data = fs.readFileSync("6_file_system/file/kode.txt");
    
    console.log(data.toString());    
} catch (error) {
    console.log("== error hoho ==");
    return console.error(error);
}
