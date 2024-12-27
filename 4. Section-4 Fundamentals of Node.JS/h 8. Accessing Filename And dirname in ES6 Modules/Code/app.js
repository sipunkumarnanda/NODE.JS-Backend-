import {num} from './math.js'



// console.log("-----------------------------------------------------------");
// const meta = import.meta
// console.log(meta.url); 

// console.log("-----------------------------------------------------------");
// console.log(meta.dirname); 

console.log("                       ");
console.log("app.js File Where File IS Importing -------------------------------------------------");

// const {filename , dirname} = import.meta
// console.log("FILE NAME = " , filename);
// console.log("DIR NAME = " , dirname);

// Add own property (Custom Property on import.meta )

import.meta.sipun = "Sipun Kumar Nanda"
// console.log(import.meta.sipun);

const {filename , dirname , sipun} = import.meta
console.log(filename , dirname , sipun);

console.log(typeof import.meta);

console.log(dirname);
console.log(process.cwd());