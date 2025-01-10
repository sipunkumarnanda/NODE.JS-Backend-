## Notes on Constructor Function and the `new` Keyword in JavaScript

---

### Constructor Function Without `new`
#### Code Example:
```javascript
function User(firstName, loginCount, isLoggedIn) {
    // console.log(this); // "this" refers to the global object (or undefined in strict mode).
    this.firstName = firstName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this; // Returns the global object (or undefined in strict mode).
}

const user1 = User("Sipun", 10, true);
// When invoked without the "new" keyword, "this" refers to the global object, and properties are added to it.
console.log(user1); // Logs the global object with properties: { firstName: 'Sipun', loginCount: 10, isLoggedIn: true }.

const user2 = User("Ankita", 10, false);
// Invoking the function again overwrites the values of the properties in the global object.
console.log(user2); // Logs the global object with updated values: { firstName: 'Ankita', loginCount: 10, isLoggedIn: false }.
```

#### Key Points:
1. **Global Execution Context:**
   - When the `User` function is invoked without the `new` keyword, `this` refers to the global object (`window` in browsers or `global` in Node.js).
   - If in **strict mode**, `this` is `undefined`, and accessing or assigning properties will throw an error.

2. **Overwriting Global Properties:**
   - Each invocation of `User` modifies the global object, potentially overwriting previous properties.

---

### Constructor Function with `new`
#### Code Example:
```javascript
function User(firstName, loginCount, isLoggedIn) {
    this.firstName = firstName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // Implicitly returns "this" (the newly created object).
}

const user1 = new User("Sipun", 10, true);
console.log(user1); // Logs: User { firstName: 'Sipun', loginCount: 10, isLoggedIn: true }

const user2 = new User("Ankita", 10, false);
console.log(user2); // Logs: User { firstName: 'Ankita', loginCount: 10, isLoggedIn: false }
```

#### How the `new` Keyword Works:
1. **Creates a New Object:**
   - A new object is created internally and is the value of `this`.

2. **Prototype Linking:**
   - The new object’s prototype is linked to the constructor function’s `prototype` property.

3. **Binds `this`:**
   - Inside the function, `this` refers to the newly created object.

4. **Implicit Return:**
   - The `new` keyword automatically returns the newly created object unless an explicit `return` statement specifies a different object.

---

### Additional Features of `new` Objects
#### Checking Constructor:
```javascript
console.log(user2.constructor); // Logs: [Function: User]
```
- The `.constructor` property of `user2` points to the `User` function, indicating it was created by this constructor.

#### Checking Instance:
```javascript
console.log(user2 instanceof User); // true
```
- The `instanceof` operator checks whether `user2` is an instance of the `User` constructor.

---

### Key Differences Between `new` and Normal Invocation:
| Feature                             | Without `new`                     | With `new`                              |
|-------------------------------------|------------------------------------|-----------------------------------------|
| **Context of `this`**               | Global object (or undefined)       | Newly created object                    |
| **Prototype Linking**               | No prototype linking               | Links to `User.prototype`               |
| **Return Value**                    | Return value of the function       | Newly created object (unless overridden)|
| **Instance Check (`instanceof`)**   | `false`                            | `true`                                  |

---

### Summary:
- Using `new` ensures the function behaves as a constructor, creating and returning a new object.
- Without `new`, the function behaves like a regular function, and `this` depends on the context in which it is called.

---