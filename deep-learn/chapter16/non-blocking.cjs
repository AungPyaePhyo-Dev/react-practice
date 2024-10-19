const fs = require('node:fs');
fs.readFile('/home/aung/Practice/react-practice/deep-learn/chapter16/helloworld.js', (error, data) => {
    console.log("data", data.toString());
});

console.log("After read file");
