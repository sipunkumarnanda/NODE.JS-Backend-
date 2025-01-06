### Code Breakdown and Explanation:

1. **Reading File Content**:

```javascript
import fs from 'fs/promises';

const contentBuffer = await fs.readFile('./text.txt');
```

- Here, you're using **`fs/promises`** to read the file asynchronously.
- **`readFile()`** returns a buffer that represents the content of the file.
- You’re using **`await`** to ensure the content is read before processing.

---

2. **Hexadecimal to String/Character** (bufferToString):

```javascript
function bufferToString(buffer) {
    let newstring = "";
    buffer.forEach((data) => {
        newstring += String.fromCharCode(data);
    });
    return newstring;
}
```

- **`bufferToString()`** function converts a buffer into a string by using the **`String.fromCharCode()`** method.
- Each byte in the buffer is passed into **`String.fromCharCode()`**, which returns the character representation for that byte's code point.
- This works for values from `0x00` to `0xFF` (which covers all basic characters).

**Example:**
- Buffer value of `0x41` will produce `'A'` because **`String.fromCharCode(0x41)`** returns `'A'`.

---

3. **Binary to String/Character** (bufferToString2):

```javascript
function bufferToString2(buffer) {
    // Convert to binary and store inside an array
    let binaryData = [];
    buffer.forEach((data) => {
        binaryData.push(data.toString(2));
    });

    let newstring = "";
    binaryData.forEach((byte) => {
        newstring += String.fromCharCode(parseInt(byte, 2));
    });
    return newstring;
}
```

- **`bufferToString2()`** works similarly to **`bufferToString()`**, but it first converts each byte of the buffer to a **binary string** using **`data.toString(2)`**.
- The binary strings are then converted back into characters using **`parseInt(byte, 2)`** to convert each binary string to a number, and **`String.fromCharCode()`** is used to get the character.
- This approach works, but it introduces unnecessary steps (converting to binary and then back).

---

4. **Incorrect Use of `String.fromCharCode()` with a Number (Not Hexadecimal)**:

```javascript
console.log(String.fromCharCode("10000"));  // Its work only Hexadecimal
```

- **Problem:** You're passing a **string** (`"10000"`) to **`String.fromCharCode()`**. However, **`String.fromCharCode()`** expects a **number** (not a string), and it's designed to work with Unicode code points (i.e., integer values).
- The value `"10000"` is a string, not a number, so it may not produce the expected result.
- In JavaScript, **`String.fromCharCode()`** works with **integer** values representing Unicode code points. The input `"10000"` will be treated as a string, which will not behave as expected.

**Correcting it**:
To use **`String.fromCharCode()`** properly, you should pass an **integer** (not a string):

```javascript
console.log(String.fromCharCode(10000));  // This works and gives a character for U+10000
```

This will output the character corresponding to the Unicode code point `U+10000`, which is in the supplementary planes.

---

### **Corrected Code**:

```javascript
import fs from 'fs/promises';

const contentBuffer = await fs.readFile('./text.txt');

// Hexadecimal to String or Character 
function bufferToString(buffer) {
    let newstring = "";
    buffer.forEach((data) => {
        newstring += String.fromCharCode(data);
    });
    return newstring;
}

// Convert buffer to string using Hexadecimal representation
const newdata = bufferToString(contentBuffer);
// console.log(newdata);

// Binary to String or Character 
function bufferToString2(buffer) {
    // Convert to binary and store inside an array
    let binaryData = [];
    buffer.forEach((data) => {
        binaryData.push(data.toString(2));  // Convert byte to binary
    });

    let newstring = "";
    binaryData.forEach((byte) => {
        newstring += String.fromCharCode(parseInt(byte, 2));  // Convert binary back to number
    });
    return newstring;
}

const data2 = bufferToString2(contentBuffer);
// console.log(data2);

// Corrected use of String.fromCharCode with integer
console.log(String.fromCharCode(10000));  // Works as expected with integer
```

### **Explanation of Output**:

1. **`String.fromCharCode(10000)`**:
   - Outputs a character for Unicode code point `U+10000`, which is a supplementary character (outside the Basic Multilingual Plane).
   - The character for `U+10000` is **𐀀** (an ancient letter from the U+10000 to U+1FFFF range).

### **Summary of Corrections**:

- **String.fromCharCode()** works with numbers (Unicode code points) and not with strings. When you pass a string like `"10000"`, it won't behave as expected. Instead, it should be an integer (`10000`).
- The code is correct for both **Hexadecimal** and **Binary** encoding. The binary conversion part is unnecessary but it demonstrates how you can convert from binary back to characters.
- **`parseInt()`** correctly converts the binary string back into an integer to be used with **`String.fromCharCode()`**.



---