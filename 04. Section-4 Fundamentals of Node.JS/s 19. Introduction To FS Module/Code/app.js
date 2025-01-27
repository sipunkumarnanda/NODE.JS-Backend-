// import fs, { readFile } from 'node:fs'

// readFileSync Method 
/*
// console.log(fs);
const contentBuffer = fs.readFileSync('./index.html')

// console.log(contentBuffer.toString());
// // console.dir(contentBuffer.toString());

const content = contentBuffer.toString()
console.log(content);
*/

// what is the 2nd arguments 
// const content = fs.readFileSync('./index.html' , 'utf-8')
// console.log(content);


/*
// readFile Method
const content = readFile('./index.html' , 'utf-8' , ((err , data)=>{
    console.log(data);

    // return data   // readFile function is not designed to return something 
}))
console.log(content);  // Undefined because readFile function is not designed to return something . 
console.log("End------");
*/

// If we dont give 2nd argumnets as character encoding then we have to convert it to String
// readFile('./index.html' , ((err , data)=>{
//     console.log(data);
//     const content = data.toString()
//     console.log(content);
// }))
// console.log(content);  // Undefined because readFile function is not designed to return something . 
// console.log("End------");

// We won't use anything above we will use node:fs/promises
import fs, { readFile } from 'node:fs/promises'


let i = 0 
const timerId = setInterval(()=>{
    console.log(i++);
    
},2)

const a = await readFile('./abc.txt')  // Now here readfile return Promises
// console.log(a.toString());
console.log("Reading Done");
console.log("Reading Done" , a);
console.log("End");

// if(i === 15){
//     clearInterval(timerId)
// }
