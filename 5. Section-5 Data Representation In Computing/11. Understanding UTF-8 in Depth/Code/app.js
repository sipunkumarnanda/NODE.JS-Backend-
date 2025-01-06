import fs from 'fs/promises'

const contentBuffer =await fs.readFile('./text.txt')

console.log(contentBuffer);
console.dir(contentBuffer);

let binaryString = ""
contentBuffer.forEach((data)=>{
    console.log(data);
    binaryString = `${binaryString} ${data.toString(2)} ` 
})
// console.log(binaryString);

const bdata = '11111011000001101'
// console.log(parseInt(bdata , 2).toString(16).toUpperCase());