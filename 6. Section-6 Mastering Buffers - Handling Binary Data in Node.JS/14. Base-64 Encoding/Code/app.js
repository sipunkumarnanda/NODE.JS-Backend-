console.log(btoa("abc")); // Output: YWJj
console.log(atob("YWJj")); // abc

// It uses Base-64 encoding. First, the string "abc" is converted to binary data using UTF-8 encoding, 
// and then the binary data is encoded as a Base-64 string.

// Explanation:
/*
The string "abc" is represented in binary as:
a = 01100001
b = 01100010
c = 01100011

Combined binary representation:
01100001 01100010 01100011

In Base-64 encoding, the binary data is divided into groups of 6 bits:
011000 010110 001001 100011

Each 6-bit group is mapped to a Base-64 character:
011000 -> Y
010110 -> W
001001 -> J
100011 -> j

Final Base-64 encoded string: YWJj
*/

// ---------------------------------------------------------------------------------

console.log(btoa("ab")); // Output: YWI= (Why like this ? )

/*
In Base-64 encoding, a minimum of 3 bytes (24 bits) is required for processing.
If the input string has fewer than 3 bytes, padding (`=`) is added to make it a multiple of 3.
Each character in the Base-64 encoding represents 6 bits (hence 4 characters for 3 bytes).

Example: "ab"
ASCII Representation:
a: 01100001
b: 01100010

Combine the binary values into a 24-bit group (pad with 0s to make 24 bits if less):
01100001 01100010 00000000 (24 bits)

Divide the 24-bit group into 4 groups of 6 bits each (Base-64 operates in 6-bit groups):
011000 010110 001000 000000
 |        |       |      |
  Y        W       I      =

The '=' is added as padding because the original data is less than 3 bytes (or 24 bits).
*/

console.log(btoa("a"));  // Output - YQ==

/*
In Base-64 encoding, a minimum of 3 bytes (24 bits) is required for processing.
If the input string has fewer than 3 bytes, padding (`=`) is added to make it a multiple of 3 bytes.
Each character in the Base-64 encoding represents 6 bits, requiring 4 Base-64 characters for 3 bytes of input.

Example: "a"
ASCII Representation:
a: 01100001

Combine the binary values into a 24-bit group (pad with 0s to make 24 bits as "a" is just 1 byte):
01100001 00000000 00000000 (24 bits)

Divide the 24-bit group into 4 groups of 6 bits each (Base-64 operates in 6-bit groups):
011000 010000 000000 000000
 |        |       |      |
  Y        Q       =      =

Explanation of the padding (`=`):
- The original data is just 1 byte, which is 8 bits.
- To make it 3 bytes (24 bits), 16 bits of padding (`00000000 00000000`) are added.
- In the Base-64 output, 2 padding characters (`=`) are added to indicate this.

Base-64 Encoded Output:
console.log(btoa("a")); // Output: YQ==
*/
console.log(atob("YQ==")); // a

console.log(btoa("abcd"));  // Output - YWJjZA==
/*
In Base-64 encoding, input strings are processed in chunks of 3 bytes (24 bits).
Each group of 24 bits is divided into 4 groups of 6 bits, and these groups are encoded into Base-64 characters.
If the input is not a multiple of 3 bytes, padding (`=`) is added to the output to ensure proper encoding.

Example: "abcd"
ASCII Representation:
a: 01100001
b: 01100010
c: 01100011
d: 01100100

Combine the binary values into 24-bit groups (3 bytes each):
For "abc":
01100001 01100010 01100011 (24 bits)
For "d" (only 1 byte remains, so it will be padded to make a 24-bit group):
01100100 00000000 00000000 (padded to 24 bits)

Convert each 24-bit group into Base-64 by dividing into 6-bit chunks:

First group ("abc"):
011000 010110 001001 100011
  Y      W      J      j

Second group ("d" + padding):
011001 000000 000000 000000
  Z      A      =      =

Base-64 Encoded Output:
- "abc" is encoded as YWJj.
- "d" is encoded as ZA== because of padding.

Full Base-64 Encoded Output:
console.log(btoa("abcd")); // Output: YWJjZA==


*/

console.log(atob("YWJjZA=="));  // abcd