// const obj = {
//     name : "Sipun",
//     age : 23 ,

//     address: {
//         city: "BBSR",
//         state: "Odisha"
//     },

//     greet(){
//         console.log("Hello " , this.name);
//     }
// }

// obj.greet()

// console.log(obj.greet());  // Hello  Sipun undefined Because Obj.greet() doesn't return anything
// const data = obj.greet()
// console.log(data);   //  undefined Because Obj.greet() doesn't return anything

// Obj Destructuring 
// const {name , age} = obj
// console.log(name , age);

// Rename During Obj Destructing 
// const {name : newName , age : newAge} = obj
// console.log(newName , newAge);

// Nested Object Destructuring
// const {address : {city , state}} = obj  /// here its mean console.log(obj.address.city , obj.address.state);
// console.log(city , state);

// Some people doing the same thing like this 
// const{address} = obj  
// console.log(address); // { city: 'BBSR', state: 'Odisha' } Then 
// const {city , state} = address
// console.log(city , state);

// Destructuring in Function parameter
// function hello({name , age}){
//     console.log(name , age);
// }
// // hello(obj)

// // Nested Function 
// function hello2({address : {city , state}}){
//     console.log(city , state);
// }
// hello2(obj)

// Obj Destructing with Dynamic Key 
const obj = {}

let name = "name"
let value = "Sipun"

obj[name] = value   //its Mean -  obj.name = value 
// console.log(obj);

let age = "age"
let ageValue = 23
obj[age] = ageValue      //its Mean -  obj.age = value 
// console.log(obj);

// Increment age value if age is present inside obj 
// if(obj[age]){
//     obj[age] += 1  // Here its mean previousValue + 1 , which is ageValue(23) + 1 = 24 
// }
// console.log(obj);

const key = "name"
//console.log(obj[key]);   // Here its mean obj.key And here key is name , so now its obj.name , which is sipun 

const ageKey = "age"
if([ageKey] in obj){
    console.log("True");
}else{
    console.log("False");
}