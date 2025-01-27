// Environment Variable Change using Node.js 

// const {exec} = require("child_process")
// exec(`powershell -command "setx sipun_Nanda "Node.JS" /M"`)

const environmentVariables = process.env ;
// console.log(environmentVariables);

// setInterval(()=>{
//     console.log("environmentVariables");
// },1000)

// let num = process.env.num
// console.log(num);

// process.env.num = 10290
// console.log(process.env.num);

console.log(`Hiiii My Mobile Number is : ${environmentVariables.sipun}`);



const fs = require('fs')
const fileData = fs.readFileSync('./abcd').toString()
console.log(fileData);

console.log(fileData.split('\n'));

console.log("--------------------------------------");

fileData.split('\r\n').forEach((variable)=>{
    const [key,value] = variable.split("=")
    process.env[key] = value
})

// -----------------------------------------------------------------------------


// Using this for debugging 
setInterval(()=>{
    const a = process.env;
    console.log("Hii");
},1000)




// NOTE : - 
/* 
//////////////////////////////////////////////

process.env[key] = value    V/S process.env.key = value 
Why Bracket Notation Works:
In dot notation (process.env.key), JavaScript interprets key as the literal string "key", not the variable's value.
In bracket notation (process.env[key]), JavaScript evaluates the expression inside the brackets and uses the value of the key variable, so you can dynamically add properties to an object.

////////////////////////////////////////////////////////
*/



// /r /n 