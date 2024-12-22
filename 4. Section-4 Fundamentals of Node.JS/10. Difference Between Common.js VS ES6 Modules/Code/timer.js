// for(let i =0 ; i<100000000 ; i++){
//     console.log(i);
// }

// console.log(this);
// module.exports.a = 10
// console.log(this);

console.log("Running Timer .............");

// In Common JS 
// const timer3 = require('./timer3.js')
// module.exports = timer3

// // In ES 6 Module 
// // import timer3 from './timer3.js'
// // export default 'timer'

// console.log("End of Code timer.js");

// Multiple value can be exported in mjs . ES 6 
// Named export 
export const obj1 = {
    name : "Ankita" ,
    age : 20 
}
export const obj2 = {
    name1 : "Akku" ,
    age : 21 
}
export const num = 5 
export const str = "String"

export default 'My Default Value'

