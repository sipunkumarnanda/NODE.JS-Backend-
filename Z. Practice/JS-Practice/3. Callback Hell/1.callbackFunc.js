/*
// A callback function is a function you give to another function to use later. It's like saying, "Hey, after you're done doing your work, call this function!"
So, when you pass a function as an argument to another function, the passed function is called the callback function because it will be "called back" when the main function finishes its task.

-----------------------------------------------------------------------------------------------------

If we pass a function as an argument to another function, the passed function is called a callback function. The purpose of a callback function is to allow the receiving function to execute it at some point, typically after completing an operation or when a certain condition is met. 
*/

function getName(name , callbackFun){
    console.log("Hiii My name is : " , name);
    callbackFun(name)
}

function callMe(){
    console.log("Iam a callback Function");
}

// getName("Ankita" , callMe) // Here getName is -> Higher Order Func , and callMe is -> Callback Func

// getName("Sipun" , ((nameParam)=>{
//     console.log("I am a call back function : " , nameParam);
// }))


//


const calculate = function(a,b, calculate){
    return calculate(a,b)
}

function sum(a,b){
    // console.log(a+b);
    return a + b
}
function multi(a,b){
    // console.log(a*b);
    return a * b
}

const result = calculate(10,20,sum)
// console.log(result);

// console.log(calculate(10,50,multi));   // Here we passing function as a third argument 


// callback hell

function xyz(callbackFun){
    setTimeout(()=>{
        console.log(name);
    },2000)
    callbackFun(name)
}

let name = "Ankita"
function cbCall(name){
    console.log("Hii My name is : " , name);
}

// function call
//xyz(cbCall("Ankita")) // if we do like this it will immediate invoked , Mean cbCall("Ankita")-> prints a string and that string will present inside xyz() Function i.e - xyz(string which is print from cbcall("Ankita")) , so it will give error 

// Explanation
// xyz(cbCall("Ankita")) 
// If we do this, it will immediately invoke cbCall("Ankita").
// This means cbCall("Ankita") executes first, prints the string, and returns `undefined` (since cbCall doesn't return anything).
// The returned value (undefined) will be passed to xyz() as the argument.
// So, it effectively becomes xyz(undefined).
// Inside xyz, when it tries to call callbackFun (which is now undefined), it will throw an error:
// TypeError: callbackFun is not a function.

// ---------------------------------

function hello(name){
    console.log("Hello how are you my dear : " , name);
    return `Hello how are you my dear :  ${name} , and iam return value `
}
console.log(hello("Ankitaa"));  // Hello how are you my dear :  Ankita undefined (Here its undefined because we are doing console.log hello function , but inside console.log,  prints return value but there is no return value in hello() Function so its undefined )



/*
Explanation:
console.log(hello("Ankitaa"));  
Output: "Hello how are you my dear : Ankita undefined"

- The `hello` function executes with the argument "Ankitaa".
- Inside the `hello` function, it logs the message: "Hello how are you my dear : Ankita undefined".
  This happens because there is no second argument provided, so it defaults to `undefined`.
- After the function executes, `console.log` tries to print the return value of `hello`.
- Since the `hello` function does not have a `return` statement, it implicitly returns `undefined`.
- Therefore, the final output in the console is the logged string from inside the `hello` function 
  followed by the return value `undefined`.
  */