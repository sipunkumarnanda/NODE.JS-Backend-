console.log("Running Math.js .............");

// const num = 5 ;

// module.exports = num


// Using ES6 Module 

// export const num = 5

// var a = 10 

// b = 20 ; // In ES6 Module bydefault Strict mode is On . So it will give Error . 


// Named Export 
export const num1 = 5

// Default Export 
const num2 = 11 ; 
export default  num2 ; 

/*
If we use export default Then while importing there is no need to give curly brace like this -->> import {num} from './math.js'

We can Do only This -->> import num2 from './math.js'
*/ 


