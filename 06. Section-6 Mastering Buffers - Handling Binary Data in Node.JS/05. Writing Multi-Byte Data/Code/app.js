// Create an ArrayBuffer of 4 bytes
const a = new ArrayBuffer(4); 

// Create a DataView for manipulating the ArrayBuffer
const view = new DataView(a);

// Write an 8-bit signed integer (setInt8) at byte offset 0
view.setInt8(0, 258); 
// The value 258 exceeds the range of an 8-bit signed integer (-128 to 127).
// Only the least significant 8 bits (2) are stored: 258 → binary `00000010`.
// The result stored is 2.

console.log(view.getInt8(0));  // Output: 2
// Reads the 8-bit signed integer at offset 0.

console.log(a);  
// The ArrayBuffer reflects the change made by `view.setInt8(0, 258)`.


// Writing a 16-bit signed integer (setInt16) at byte offset 1
view.setInt16(1, 260);
// `setInt16` stores a 16-bit signed integer in **big-endian** order by default.
// The binary value of 260 is `00000001 00000100`.
// Stored at offsets 1 and 2: [01, 04].

console.log(view.getInt16(1));  // Output: 260
// Reads the 16-bit signed integer at offset 1 (big-endian).

console.log(view);  
// Displays the updated DataView.


// Writing a 16-bit signed integer (setInt16) in Little Endian
view.setInt16(0, 260);  
// Writes the value 260 in big-endian order by default.
// Binary `00000001 00000100` is stored as: [01, 04].

console.log(view.getInt16(0));  // Output: 260
// Reads the 16-bit signed integer at offset 0 (big-endian).

console.log(a);  
// ArrayBuffer updated with big-endian storage.

view.setInt16(2, 260, true);  
// Writes the value 260 in **little-endian** order at offset 2.
// Binary `00000001 00000100` is stored as: [04, 01] (reversed).

console.log(view.getInt16(2));  // Output: 1025
// Reads the value stored at offset 2 in little-endian format.
// Binary [04, 01] → decimal 1025.

console.log(view);  
// Displays the updated DataView reflecting the changes.


// Reading values at various offsets
console.log("-------------------------");


console.log(view.getInt16(0));  // Output: 260
// Reads a 16-bit signed integer from offset 0 in big-endian order.
// The data at offsets [01, 04] → 260 in decimal.

console.log(view.getInt16(1));  // Output: 1028
// Reads a 16-bit signed integer from offset 1 in big-endian order.
// The data at offsets [04, 04] → 1028 in decimal.

console.log(view.getInt16(2));  // Output: 1025
// Reads a 16-bit signed integer from offset 2 in little-endian order.
// The data at offsets [04, 01] → 1025 in decimal.

// console.log(view.getInt16(3));  
// Throws RangeError: Offset is outside the bounds of the DataView.
// Explanation:
// - `getInt16()` requires 2 bytes to read.
// - Offset 3 is the last byte in the ArrayBuffer, so there aren't enough bytes available.

// -------------------------------------------------

// Reading as BigEndian And LittleEndian 

console.log(view.getInt16(2));  // Output: 1025
// Here, we are reading the value at offset 2 in **default little-endian order**.
// The data at offsets [04, 01] → 1025 in decimal (interpreted as little-endian).

console.log(view.getInt16(2, true));  // Output: 260
// Here, we explicitly specify `true` to read the value as **big-endian**.
// The data at offsets [04, 01] → 260 in decimal (interpreted as big-endian).

console.log("------------------------");

// Writing and Reading as setInt32() and getInt32()

// Create an ArrayBuffer of 4 bytes
const b = new ArrayBuffer(4);

// Create a DataView to manipulate the ArrayBuffer
const view2 = new DataView(b);

console.log(view2);
// The DataView object for the ArrayBuffer is created and ready to perform read/write operations.


// Writing and Reading as Big-Endian
// view2.setInt32(0, 260);
// By default, `setInt32` writes the value in big-endian order.
// console.log(view2.getInt32(0));
// Reads the value in big-endian order (default behavior).


// Writing and Reading as Little-Endian
view2.setInt32(0, 300, true);
// Stores the 32-bit integer 300 at offset 0 in **little-endian** order.
// Binary of 300: `00000000 00000000 00000001 00101100`.
// Stored as: [2C, 01, 00, 00].

console.log(view2.getInt32(0, true));  // Output: 300
// Reads the value at offset 0 in **little-endian** order (as specified with `true`).
// The data at offsets [2C, 01, 00, 00] → 300 in decimal.


// If we Write as Little-Endian and Read as Big-Endian
console.log(view2.getInt32(0));  // Output: 738263040
// Here, the value is read in **big-endian** order (default behavior).
// Stored data: [2C, 01, 00, 00].
// When interpreted as big-endian: [2C 01 00 00] → decimal 738263040.

console.log(view2);
// Displays the updated DataView reflecting the stored value.

console.log("-------------------------------------");

// Setting as 32-Bit and Reading as 8-Bit

view2.setInt32(0, 0x7823e324);
// Stores the 32-bit hexadecimal value `0x7823E324` at offset 0 in the ArrayBuffer.
// The value is stored as [78, 23, E3, 24] in big-endian order by default.

console.log(view2);
// Displays the updated DataView reflecting the stored 32-bit value.

console.log(view2.getInt8(0));  
// Reads 8 bits (1 byte) from offset 0 as a signed integer.
// At offset 0, the value `78` (in hexadecimal) is stored.
// Hexadecimal `78` → Decimal `120`.
// Output: 120

// If we read as Little-Endian, then:
console.log(view2.getInt16(0, true));  // Output: 9080
// Explanation:
// - The value stored at offsets [0, 1] in **big-endian order** is [78, 23].
// - When read as **little-endian**, the bytes are reversed: [23, 78].
// - Hexadecimal `2378` → Decimal `9080`.
// - Therefore, the output is 9080.

