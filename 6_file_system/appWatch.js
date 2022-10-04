const fs = require("fs");

const watcher = fs.watch("6_file_system/file");

watcher.on("change", (event,filename) => {
    console.log(`${event} pada ${filename}`);
})