const fs = require('fs')


//Sync
const inputText = fs.readFileSync('./inputText.txt','utf-8');
// console.log(inputText);

// const textToWrite = ` Output Text ${inputText}.\n Created on ${Date.now()}`
// fs.writeFileSync('./Output.text', textToWrite)


//Async

fs.writeFile('./writeSync.txt',inputText,(err)=>{
  console.log(data);
});
console.log("Execute first");
