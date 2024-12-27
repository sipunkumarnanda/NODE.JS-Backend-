// const b = require('./math')


function loadModule(path){

   const fs = require('fs')
   const fileContent = fs.readFileSync(path).toString();

   return (function(send){
        //Module code goes here
          eval(fileContent)
        //console.log(send);
           return send
   })({})
}

const value = loadModule('./math.js')
console.log(value); 

console.log(value.a); 

// ------------------------------------------------------

/*
const sum = loadModule("./sum.js")
sum(1,2,3,4,5)  // Output - sum is not a function Because sum function is inside send object , Now we have to     Destructure that Object
*/

const { sum } = loadModule('./sum.js')
console.log(sum(1,2,3,4,5)); 