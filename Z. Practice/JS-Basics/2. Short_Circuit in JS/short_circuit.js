let a = "apple"
let b = "Ball"

let result = a || b
// console.log(result); // apple

let c = ""
let d = "Something"
let result2 = c || d
// console.log(result2);

let h = null
let i = undefined
let j = "Something"
let result4 = h || i || j
// console.log(result4);


let e = 0
let f = undefined
let g = null
let result3 = e || f || g
// console.log(result3);  // null  
/*
Short-Circuit Evaluation with ||: The || operator works by evaluating each operand from left to right, and it stops (short-circuits) as soon as it finds the first truthy value. If no truthy value is found, it returns the last evaluated value, even if that value is falsy.
*/

let defaultvalue = ""

let result5 = defaultvalue || "I will Print if 1St value is Falsy"
// console.log(result5);

//
const user = {}
let result6 = user.name || "Guest"  //  If `user.nickname` is falsy, use "Guest"
// console.log(result6);

// obj[thirdArg] = (obj[thirdArg] || 0) + 1;

let res = 0 ; 
let res1 = (res || 0) + 1 ; // Here its check , if res is not initialized before , then initialized to 0 , the increment to 1 
console.log(res1);

const objx = {
    name : "Ankita" ,
    age : 22
}
let nameKey = "Alisha"
// let ageKey = "agee"

objx[nameKey] = (objx[nameKey] || 0)+1  // Here its mean if objx.alisha is absent first initialize to 0 then , increment to 1 
console.log(objx);

objx[nameKey] = (objx[nameKey] || 0)+1 // obj.namekey = Here its mean if objx.alisha is not initialize then it initialize to 0 ,  then incement 1
console.log(objx);



// 
// let ress = 0 ; 
let ress = {}
let anyKey = "Hii"

ress[anyKey] = (ress[anyKey] || 0) + 1 ; // ress.anykey = (Here its ckecks , if ress.key is not initialized before then first initialized with 0 , then incemenet to 1)
console.log(ress);

ress[anyKey] = (ress[anyKey] || 0) + 1 ; // ress.anykey = (Here its ckecks , if ress.key is not initialized before then first initialized with 0 , then incemenet to 1) , in this case ress.key = 1 , so now its incement to 1 , which is previousValue = previousValue + 1 
console.log(ress);