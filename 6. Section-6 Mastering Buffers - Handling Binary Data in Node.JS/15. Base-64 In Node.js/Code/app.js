import fs from 'fs/promises';

// Read file as a Buffer
// const a = await fs.readFile("file.txt");  // Output: <Buffer 61 62 63>

// Read file as a UTF-8 string
// const a = await fs.readFile("file.txt", "utf-8");  // Output: abc

// Read file as a Base64 encoded string
const a = await fs.readFile("file.txt", "base64");  // Output: YWJj
// Explanation: When the second argument is "base64", the content of the file is encoded in Base64 format.
// This works similarly to the `btoa()` method.

console.log(a);  

// fs.writeFile('newFile.txt', "YWJj") 
// Writes the string "YWJj" directly into the file without any conversion.

// fs.writeFile('newFile.txt', "YWJj", "base64") 
// Converts the Base64 string "YWJj" to binary data, then writes the corresponding ASCII characters to the file.
// For example, "YWJj" in Base64 decodes to the string "abc" in ASCII, so "abc" will be written to the file.
// This works similarly to the `atob()` method.

fs.writeFile('newFile.txt', a, "base64")
// Writes the variable `a` (assuming it contains Base64-encoded data) to the file after decoding it from Base64.

