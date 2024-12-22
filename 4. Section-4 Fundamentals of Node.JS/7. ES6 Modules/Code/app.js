// Common js 

// const num = require('./math')

// console.log(num);

/*
// Using ES6 Module 

// Importing Nmaed Export 
import {num1} from './math.js'
console.log(num1);


// Importing Default Export 
import num2 from './math.js'
console.log(num2);

*/

// Also we can Import both Named Export And Default Export in Single line like this - (We can't do like this in common js - Module.export and require() Function .)

// import {num1} , num2 from './math.js'  // This is Wrong syntax The first argument must be Default export 
import num2 , {num1} from './math.js'

console.log(num1 , num2); 