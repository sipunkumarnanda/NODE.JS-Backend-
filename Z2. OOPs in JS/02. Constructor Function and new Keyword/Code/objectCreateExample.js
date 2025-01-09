function xyz() {
    console.log(`This is xyz! And my name is ${this.name}, and I am ${this.age} years old.`);
}

function sayHi(name, age) {
    // Here we create an object with its own properties and methods
    const obj = {
        name,
        age,
        xyz // Assigning the function reference xyz to this object's xyz property
    };
    return obj;
}

// This is the same as above but written explicitly for understanding:
// Behind the scenes, it's equivalent to defining the xyz function directly inside the object
/*
function sayHi(name, age) {
    const obj = { 
        name,
        age,
        xyz() { 
            console.log(`This is xyz! And my name is ${this.name}, and I am ${this.age} years old.`);
        }
    };
    return obj;
}
*/

// Example usage
const obj2 = sayHi("Akankshya", 20); // Create an object with name and age
obj2.xyz(); // Outputs: This is xyz! And my name is Akankshya, and I am 20 years old.


// ---------------------------------------------------------------------------------------------------------------

// Using Object.create()
const userMethods = {
    xyz2() {
        console.log(`This is xyz! And my name is ${this.name}, and I am ${this.age} years old.`);
    }
};

function sayHi2(name, age) {
    // Create a new object that inherits from userMethods
    const obj = Object.create(userMethods);
    obj.age = age; // Assign the age property to the object
    obj.name = name; // Assign the name property to the object

    return obj; // Return the newly created object
}

// This is conceptually equivalent to:
/*
function sayHi2(name, age) {
    const obj = Object.create(userMethods);

    // Behind the scenes, it's like saying:
    const obj = {
        xyz2() {
            console.log(`This is xyz! And my name is ${this.name}, and I am ${this.age} years old.`);
        }
    };

    obj.age = age; // Assign the age property to the object
    obj.name = name; // Assign the name property to the object

    return obj; // Return the newly created object
}
*/

const obj3 = sayHi2("Ankita", 19); // Create a new object with the specified name and age
console.log(obj3);  // { age: 19, name: 'Ankita' } Not Showing userMethods Becasue 

/* The reason why userMethods (or the xyz2 method) is not showing up when you log obj3 is that only the object's own properties are logged when using console.log(obj3). The xyz2 method is inherited from userMethods, meaning it's part of the prototype of obj3, not its own properties. */

// obj3.xyz2(); // Outputs: This is xyz! And my name is Ankita, and I am 19 years old.

console.log(Object.getPrototypeOf(obj3));  // Logs: { xyz2: [Function: xyz2] }  // we can see prototype like this 

