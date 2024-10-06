const fs = require("node:fs");
async function parseFile(filename) {
    let stream = fs.createReadStream(filename, {encoding: "utf-8"});
    for await (let chunk of stream) {
        console.log('chunk ', chunk);
    }
}

parseFile('./hello.txt');