function User(firstName, loginCount, isLoggedIn) {
    // console.log(this); // Here, "this" refers to the Global Execution Context (or undefined in strict mode).
    this.firstName = firstName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this; // Returns the global object (or undefined in strict mode).
}

// const user1 = User("Sipun", 10, true);
// When invoked without the "new" keyword, "this" refers to the global object, and properties are added to it.
// console.log(user1); // Logs the global object with properties firstName, loginCount, and isLoggedIn added to it.

// const user2 = User("Ankita", 10, false); 
// Invoking the function again overwrites the values of the properties in the global object.
// console.log(user2); // Logs the global object with updated values (overwritten from user1).


// new keyword 
const user1 = new User("Sipun", 10, true);
// console.log(user1); // User { firstName: 'Sipun', loginCount: 10, isLoggedIn: true }
const user2 = new User("Ankita", 10, false); 
// console.log(user2);  // User { firstName: 'Ankita', loginCount: 10, isLoggedIn: false }
console.log(user2.constructor);

console.log(user2 instanceof User);  // true
