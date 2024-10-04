const fs = require("node:fs");

console.log("Read Start");

fs.readFile('./helloworld.txt', "utf-8", (err,data) =>{
    if(!err) {
        console.log("Data ", data);
    }else {
        console.log("err ", err);
    }
}); 

console.log("End")

// Read Start
// End
// Data Hello World // async - ချက်ချင်းမပြီး