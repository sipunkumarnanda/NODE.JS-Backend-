// Obj Destructing with Dynamic Key 
const obj = {}

let name = "name"
let value = "Sipun"

obj[name] = value    // Here its mean - obj.name = value , which is obj.name = "Sipun"
// console.log(obj);

let age = "age"
let ageValue = 23
obj[age] = ageValue
// console.log(obj);

// Increment age value if age is present inside obj 
// if(obj[age]){
//     obj[age] += 1  // Here its mean previousValue + 1 , which is ageValue(23) + 1 = 24 
// }
// console.log(obj);

const key = "name"
// console.log(obj[key]);   // Here its mean obj.key And here key is name , so now its obj.name , which is sipun 

// console.log(obj);

// DEstruct and Rename 
const {name : newName , age : newAge} = obj
// console.log(newName , newAge);

// Accessing by dynamic key : ANd Rename 
const key1 = "name"
const key2 = "age"

const {[key1] : nameA , [key2] : ageB} = obj  // here name : nameA , And age : ageB
// console.log(nameA , ageB);

// Check 
// const ageKey = "agea"
// if([ageKey] in obj){
//     console.log("True");
// }else{
//     console.log("False");
// }

// Now 
// const keyCheck = "ageee"
// if(obj[keyCheck]){   // Here its mean if obj.age is present then its True else False , Mean age inside OBJ 
//     console.log("true");
// }else{
//     console.log("False");
// }

// The Above Code Meaning is This 

// if(obj.agee){
//     console.log("true");
// }else{
//     console.log("False");
// }


// Practical use case 
// const config = { apiKey: "123ABC", dbName: "testDB", port: 8080 };
// const userInput = "apiKey";
// const userInput = "dbName";
// const userInput = "port";

// const { [userInput]: extractedValue } = config;
// console.log(extractedValue); // "123ABC"


// Extracting Multiple values Dynamically 
// const obj2 = { name: "Alice", age: 25, city: "Wonderland" };
// const keys = ["name", "city"];

// keys.forEach((key)=>{
//     console.log(obj2[key]);
// })

// Extract value using dynamic key from nested object 
const object = {
    name : "Ankita" ,
    age : 22 ,
    address : {
        city : "BBSR" , 
        state : "Odisha"
    }
}

const cityKey = "city"
const stateKey = "state"

// const { address : {[cityKey] , [stateKey]}} = object   // REFER NOTES TO UNDERSTAND 
const { address : {[cityKey] : cityName , [stateKey] : stateName}} = object
console.log(cityName , stateName);


// Limitations and Considerations
// Key Must Exist: If the key doesn’t exist in the object, the value will be undefined.
// Error Handling: Handle cases where dynamic keys may lead to runtime errors if not properly validated.

const objz = {name : "Akankshya"}
const keyz = "name"

const {[keyz] : keyVal = "Error : No Value as keyVal inside Obj"} = objz
console.log(keyVal);