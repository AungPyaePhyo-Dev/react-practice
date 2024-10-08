const fs = require('node:fs');
let start = new Date();

let p1 = fs.promises.readFile('hello1.txt')
let p2 = fs.promises.readFile('hello2.txt')
// same task => better efficient
Promise.all([p1,p2]).then(data => {
    let end = new Date();
    let time = end - start;
    console.log("Time ", time);
})