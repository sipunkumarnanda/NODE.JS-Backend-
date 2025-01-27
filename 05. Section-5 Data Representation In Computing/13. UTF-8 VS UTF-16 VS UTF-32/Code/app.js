import fs from 'fs/promises'

const contentBuffer = await fs.readFile('./text.txt')


// Hexadecimal to String or Character 
function bufferToString(buffer){
    let newstring = ""
    buffer.forEach((data)=>{
        newstring += String.fromCharCode(data);
    })
    return newstring
}


// bufferToString(contentBuffer)
const newdata = bufferToString(contentBuffer)
// console.log(newdata);


//  Binary to String or Character 
function bufferToString2(buffer){
    // Convert to binary and storing inside a array 
    let binaryData = []
    buffer.forEach((data)=>{
        binaryData.push(data.toString(2))
        
    })
    let newstring = ""
    binaryData.forEach((byte)=>{
        newstring += String.fromCharCode(parseInt(byte,2))
    })
    return newstring
}

const data2 = bufferToString2(contentBuffer)
// console.log(data2);

console.log(String.fromCharCode("10000"));  // Its work only Hexadecimal 