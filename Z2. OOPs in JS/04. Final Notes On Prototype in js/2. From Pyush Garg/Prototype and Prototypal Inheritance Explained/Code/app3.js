// Refer Note - \Notes\3.primitive_wrapper_objects_and_prototype_explanation.md

// let fname = "Sipun Kumar"

// In JS everything is an Object 

// console.log(typeof fname); // string

// Wrapper Class  - String , Number , boolean 
// Behind the scene 
// let fname = new String("Ankita Kumari")

// Fname String Class ka Object hai 

let fname = "Akankshya P"

// console.log(fname.__proto__);

const fullName = new String("Ankita")

console.log(fullName.at(2)); // How we can access it by at() Function , because its in String.prototype 

// Behind the scene 
fullName.__proto__ = String.prototype