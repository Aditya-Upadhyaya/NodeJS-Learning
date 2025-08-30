const fs = require('fs')


//Sync
const inputText = fs.readFileSync('./inputText.txt','utf-8');
// console.log(inputText);

// const textToWrite = ` Output Text ${inputText}.\n Created on ${Date.now()}`
// fs.writeFileSync('./Output.text', textToWrite)


//Async

fs.writeFile('./writeSync.txt',inputText,(err,data)=>{
  console.log("data wrriten");
});
console.log("Execute first");
