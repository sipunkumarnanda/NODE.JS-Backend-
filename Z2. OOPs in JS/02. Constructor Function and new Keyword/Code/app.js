// Optimized Factory Function with Shared Method to Avoid Redundant Memory Usage

/*
Here, we are optimizing a factory function to avoid creating a new getBirthYear() method for each object. Instead, we define getBirthYear() outside the object and simply reference it inside each object. This way, the method is shared across all objects created by the createUser function, saving memory by not repeating the method for every object instance.
*/

function getBirthYear() {
  return new Date().getFullYear() - this.age;
}  
//By creating this function, we achieve polymorphism" refers to a concept in object-oriented programming (OOP), 
//where polymorphism allows different objects to have methods with the same name, but they can perform differently 
//depending on the context or object.

function createUser(firstName, lastName, age) {
    const user = {
      firstName,
      lastName,
      age,
      getBirthYear : createUser.commonMethodss.getBirthYear
     
    };
    return user;
  }
  


// -----------------------------------------------------------------------------
// createUser.commonMethods = {}
// console.dir(createUser)

createUser.commonMethodss = {
  getBirthYear(){
    return new Date().getFullYear() - this.age;
  }
}
// console.dir(createUser)


//
const newObj = createUser("Ankitaa", "Kumari", 20);
console.log(newObj); // { firstName: 'Ankitaa', lastName: 'Kumari', age: 20 }
console.log(newObj.getBirthYear());  // 2005 

const newObj2 = createUser("Akankshya" , "Das" , 92)
console.log(newObj2.getBirthYear());  // 2003

console.log(newObj.getBirthYear === newObj2.getBirthYear);  // True
// Polymorphism is achieved here as the getBirthYear method works differently for different objects (newObj and
//  newObj2), despite having the same method name. The method adapts to the object's age property, showing 
// different results based on the object.








































// This Keyword explanation 
  function hello() {
    // In the function context (non-strict mode), 'this' refers to the global object (e.g., window in the browser)
    console.log(this);  // Logs the global object (e.g., window in the browser)

    return obj = {
      name : "Ankita",  
      print() {
        // Inside this method, 'this' refers to the 'obj' object
        console.log(this);  // Logs the entire object: { name: 'Ankita', print: [Function: print] }
        console.log(this.name);  // Logs the value of the 'name' property: "Ankita"
      }
    }
}

// console.log(hello().print());  // { name: 'Ankita', print: [Function: print] }
