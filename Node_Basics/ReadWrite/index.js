const fs = require('fs')

const inputText = fs.readFileSync('./inputText.txt','utf-8');

console.log(inputText);
const textToWrite = ` Output Text ${inputText}.\n Created on ${Date.now()}`
fs.writeFileSync('./Output.text', textToWrite)