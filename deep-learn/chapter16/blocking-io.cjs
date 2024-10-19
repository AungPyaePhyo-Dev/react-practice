const fs = require('node:fs');
const data = fs.readFileSync('/home/aung/Practice/react-practice/deep-learn/chapter16/helloworld.js');
console.log("data", data.toString());