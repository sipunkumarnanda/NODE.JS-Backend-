### Notes on **Import and Export in ES6 Modules**

---

### **Overview**
ES6 modules provide a standardized way to structure and reuse JavaScript code. They allow you to export variables, functions, or classes from one file and import them in another. This promotes modularity and maintainability. Let's dive into **default exports**, **named exports**, and how to use them effectively.

---

### **File 1: `userData.js`**

#### **Code:**
```javascript
const usersData = ["Long Data"]; 
const name = "Sipun Kumar Nanda";

// Named Export in ES6
export { usersData, name }; // Named exports
export { usersData, name as myNames }; // Rename during export

// Default Export
export default usersData; // Default export

// Note: You cannot have multiple default exports in the same module.
// The following code will throw an error if uncommented:
// export default function hello() {
//     console.log("Hiii");
// }

// Important: Variables and functions exported are **not globally accessible in the browser console**.
// They need to be imported explicitly in other files.
```

---

### **File 2: `productsData.js`**

#### **Code:**
```javascript
const productsData = ["Long Data"];

// Default Export
export default productsData;
```

---

### **File 3: `app.js`**

#### **Importing Named Exports:**
```javascript
// Import specific named exports from `userData.js`
import { usersData, name } from "./userData.js";

console.log(usersData); // ["Long Data"]
console.log(name); // "Sipun Kumar Nanda"
```

#### **Renaming Imports:**
```javascript
// Rename during import
import { usersData, myNames as naam } from "./userData.js";

console.log(naam); // "Sipun Kumar Nanda"
console.log(usersData); // ["Long Data"]

// Use case for renaming:
// When you have a name conflict, e.g., a local variable `myNames` already exists.
const myNames = "Akankshay";
```

#### **Default Exports:**
```javascript
// Importing the default export from `productsData.js`
import productsData from "./productsData.js"; 

console.log(productsData); // ["Long Data"]

// Rename default export during import
import a from "./productsData.js"; // You can use any name
console.log(a); // ["Long Data"]
```

#### **Named and Default Imports Together:**
```javascript
// Import both named and default exports from the same module
import usersData, { name } from "./userData.js";

console.log(usersData); // ["Long Data"]
console.log(name); // "Sipun Kumar Nanda"
```

#### **Import Everything From a Module:**
```javascript
import * as everything from './userData.js';

console.log(everything); 
// Output:
// {
//   usersData: ["Long Data"],
//   name: "Sipun Kumar Nanda",
//   default: ["Long Data"] // Default export is accessible via the `default` property
}

// Accessing the default export:
console.log(everything.default); // ["Long Data"]

// Named exports can be accessed directly:
console.log(everything.name); // "Sipun Kumar Nanda"
```

---

### **Important Concepts**

1. **Named Exports**:
   - Allows you to export multiple values from a module.
   - Use curly braces `{}` during import.
   - Names must match unless explicitly renamed.
   - Example:
     ```javascript
     export { usersData, name };
     import { usersData, name } from './userData.js';
     ```

2. **Default Exports**:
   - A module can have only one default export.
   - No curly braces needed during import.
   - Name during import can be anything.
   - Example:
     ```javascript
     export default usersData;
     import anyName from './userData.js';
     ```

3. **Combining Named and Default Imports**:
   - Both can be imported in a single statement.
   - Example:
     ```javascript
     import defaultExport, { namedExport } from './module.js';
     ```

4. **Import Everything**:
   - Imports all exports as a single object.
   - Default export is accessible via the `default` property.
   - Example:
     ```javascript
     import * as all from './module.js';
     console.log(all.default);
     console.log(all.namedExport);
     ```

5. **Why Use `defer` in `<script>` Tags?**
   - When importing modules in the browser, use `<script type="module" defer>` to:
     - Prevent blocking the initial HTML parsing.
     - Ensure scripts are executed in order, after the DOM is fully loaded.

     Example:
     ```html
     <script type="module" src="app.js" defer></script>
     ```

---

### **Rules and Best Practices**

1. **Avoid Multiple Default Exports:**
   - Each module should have at most one default export for clarity.

2. **Use Named Exports for Reusability:**
   - Prefer named exports when multiple values need to be shared.

3. **Renaming During Import:**
   - Useful to resolve naming conflicts or provide more descriptive names in context.

4. **Default Exports are Flexible:**
   - Use them when exporting a single, primary value or object.

---

### **Summary**

- **Named Exports**: Export multiple values with specific names, use curly braces to import them.
- **Default Exports**: Export a single value, import without curly braces and with any name.
- **Import Everything**: Use `* as alias` to import all exports as an object.
- **`defer` in Script Tags**: Ensures proper script loading and execution without blocking the DOM.
---