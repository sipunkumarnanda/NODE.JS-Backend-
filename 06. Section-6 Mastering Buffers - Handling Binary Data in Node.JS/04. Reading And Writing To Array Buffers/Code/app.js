// Create an ArrayBuffer of 4 bytes
const a = new ArrayBuffer(4);
// The ArrayBuffer is a fixed-length binary data buffer. Initially, all bytes are set to 0.
// console.log(a); // Uncomment to view the ArrayBuffer (will display as an empty buffer).

// Create a DataView to manipulate the ArrayBuffer
const view = new DataView(a);
// DataView provides a way to read and write multiple types of data into the ArrayBuffer.
// console.log(view); // Uncomment to view the DataView object.

// Set an 8-bit signed integer at byte offset 1 in the ArrayBuffer
view.setInt8(1, 70); // Stores the value 70 at byte offset 1.
console.log(view); // Displays the updated DataView.

// Demonstrating that one ArrayBuffer can have multiple DataViews connected to it
const view2 = new DataView(a, 1);
// Creates a new DataView starting at byte offset 1 (with no specified length, so it spans the remaining bytes).
console.log(view2); // Displays the new DataView starting from byte offset 1.

// Write a value into the new DataView (view2)
view2.setInt8(0, 40); 
// Note: In view2, the offset starts from 0 relative to the DataView, but this corresponds to byte offset 1 in the ArrayBuffer.
console.log(view2); // Updates the value at byte offset 1 in the ArrayBuffer.

// Writing a decimal number into the original DataView (view)
view.setInt8(0, 80); // Stores 80 at byte offset 0 in the ArrayBuffer.
console.log(view); // Displays the updated DataView.

// Write a binary value into the ArrayBuffer
view.setInt8(1, 0b01010001); // Stores the binary value `0b01010001` (decimal 81) at byte offset 1.
console.log(view); // Displays the updated DataView.

// Write a hexadecimal value into the ArrayBuffer
view.setInt8(2, 0x52); // Stores the hexadecimal value `0x52` (decimal 82) at byte offset 2.
console.log(view); // Displays the updated DataView.

// Write an octal value into the ArrayBuffer
view.setInt8(3, 0o123); // Stores the octal value `0o123` (decimal 83) at byte offset 3.
console.log(view); // Displays the updated DataView.

// Reading values from the DataView using getInt8
console.log(view.getInt8()); // Reads the value at byte offset 0 (80).
console.log(view.getInt8(1)); // Reads the value at byte offset 1 (binary 0b01010001 → 81).
console.log(view.getInt8(2)); // Reads the value at byte offset 2 (hex 0x52 → 82).
console.log(view.getInt8(3)); // Reads the value at byte offset 3 (octal 0o123 → 83).

// Writing a negative number into the ArrayBuffer
view.setInt8(1, -2); 
// Two's complement is used to store the negative number -2. In binary, it becomes `11111110`.
console.log(view); // Displays the updated DataView with -2 stored at byte offset 1.

console.log(view.getInt8(1)); // Reads the value at byte offset 1. Output will be -2.

view.setInt8(0,255)
console.log(view);

// Read the value at byte offset 0 using getInt8
console.log(view.getInt8(0)); // Outputs -1.
// Explanation:
// - Even though the value 255 was set, `getInt8()` interprets the value as a signed 8-bit number.
// - In an 8-bit signed integer system, the range is -128 to +127.
// - The binary representation of 255 is `11111111`, which, when interpreted as a signed integer, is -1 in Two's complement.
// - Therefore, `getInt8(0)` returns -1.


// Read the value at byte offset 0 using getUint8
console.log(view.getUint8(0)); // Outputs 255.
// Explanation:
// - `getUint8()` reads the value as an unsigned 8-bit number, where the range is 0 to 255.
// - The binary value `11111111` is interpreted as 255 when read as unsigned.
// - Therefore, `getUint8(0)` correctly returns 255.


console.log("------------------------------------");

const b = new ArrayBuffer(4)
const viewN = new DataView(b)

viewN.setInt8(0, 0xFF)
viewN.setInt8(1, 127)
viewN.setInt8(2, 128)


// getInt8 Reads value as Signed 
console.log(viewN.getInt8(0));  // -1
console.log(viewN.getInt8(1));  // 127
console.log(viewN.getInt8(2));  // -128

// getUint8 Reads Vlues as Unsigned 
console.log(viewN.getUint8(0));  // 255
console.log(viewN.getUint8(1));  // 127
console.log(viewN.getUint8(2));  // 128

viewN.setInt8(3, 135)
console.log(viewN);
console.log(viewN.getInt8(3));  // -121

viewN.setUint8(3, 260);  
// Stores 260 as Uint8. Uint8 can only store values between 0 and 255 (8 bits).
// The binary representation of 260 is 0001 0000 0100 (12 bits).
// Only the least significant 8 bits (0000 0100) are kept, which equals 4 in decimal.

console.log(viewN.getUint8(3)); // 4  
// Reads the value at byte offset 3. Since only the last 8 bits (0000 0100) are stored, the output is 4.


