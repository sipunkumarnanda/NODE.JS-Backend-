// import { usersData , name} from "./usersData.js";

// import { usersData , myNames as naam} from "./usersData.js"; // Rename During Import 
// In which Scenerio we have to do Rename 
const myNames = "Akankshay"
// console.log(naam);

// console.log(usersData);
// console.log(name);

// Import Products Data
// import {productsData} from "./productsData.js";     // we didnt import default exports using {productsData} , it will give error

// import productsData from "./productsData.js";     
// console.log(productsData);

// Rename Default Exports during Imports 
// here we can give anyname 
// import a from "./productsData.js"
// console.log(a);

// Import Named exports and Default export of usersData.js file
// import { name } from "./usersData.js"; // named import 
// import usersData from "./usersData.js"; // Default import

// How to do both named import and default import in same line 
// import usersData,  { name }  from "./usersData.js"; 

// console.log(name , usersData);


// Import Everything Of Module 
import * as everything from './usersData.js'
// console.log(everything);

console.log(everything.usersData); // we did it using default exports so we can not access like that instaed we can
console.log(everything.default); 