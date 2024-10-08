Here’s your content in Markdown format:

```markdown
In JavaScript, the behavior of variables declared with `var` is different in the browser environment compared to the Node.js environment due to differences in how each environment handles global scope.

### 1. **Global Scope in the Browser:**
In the browser, when you declare a variable using `var` at the top level (outside of any function), it becomes a property of the global `window` object. The `window` object represents the global execution context in browsers.

```javascript
var num = 65;
console.log(num);       // Outputs: 65
console.log(window.num); // Outputs: 65 (since `num` is a property of `window`)
```

- **Why Global in Browser?**
  - In the browser, the global scope is essentially the `window` object, and all global variables declared with `var` are attached to it. So, `var num` becomes `window.num`. This makes it available globally within the browser environment.
  
### 2. **Global Scope in Node.js:**
In Node.js, the global object is not `window`, but `global`. However, variables declared with `var` in the top-level scope of a file are **local to that module** (file) and not added to the global `global` object.

```javascript
var num = 65;
console.log(num);       // Outputs: 65
console.log(global.num); // Outputs: undefined (since `num` is not global in Node.js)
```

- **Why Local in Node.js?**
  - Node.js uses a module system. Each file in Node.js is treated as a separate module with its own scope. Variables declared with `var`, `let`, or `const` inside a module are scoped to that module and do not become properties of the `global` object.
  - This is done to prevent pollution of the global scope across different modules, which improves encapsulation and reduces the risk of variable name collisions between different files.

### Summary:

- **Browser**: Global variables (`var num`) become properties of the `window` object, making them accessible globally.
- **Node.js**: Variables declared in a file are scoped to that file (module) and are not added to the `global` object, making them local to that module.
```