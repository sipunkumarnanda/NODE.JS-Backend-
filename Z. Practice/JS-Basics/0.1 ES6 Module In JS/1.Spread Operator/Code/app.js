const originalObj = {
    name: "alice",
    address: { city: "London", zip: "12345" },
    hobbies: ["reading", "traveling"] ,
    greet(){
        console.log(`Hello ${this.name}`);
    } ,
    addresses : {
        city : {
            villageName : "Xyz"
        }
    }
};
// console.log(typeof originalObj);
// console.log(typeof originalObj === "object")


console.log(originalObj.addresses.city.villageName);

// Prints both key and value using iterable for in loop
let newObj = {}
for (const key in originalObj) {
    if(!Array.isArray(originalObj[key])){ // Here iam checking value is array or what 
        // console.log(`${key} : ${originalObj[key]}`);
        newObj[key] = originalObj[key]
    }
    else{
        newObj[key] = originalObj[key]
    }
}

console.log(newObj);
// newObj.greet()
// console.log(originalObj === newObj);  // we finalyy make our copy 


// Function add 
// if(typeof originalObj[key] === "function"){
//     newObj[key] = originalObj[key]
// }
// else 