/*
Octal Number System
The octal number system uses digits from 0 to 7: {0, 1, 2, 3, 4, 5, 6, 7}

Writing the number 8 in the octal number system
In the decimal system, we have digits from 0 to 9.
For example, the decimal number 12 can be expressed as:
12 = 2 * 10^1 + 1 * 10^0 
  => 12 = (2 * 1) + (1 * 10) = 2 + 10 = 12

In the octal system, after reaching the digit '7', we represent '8' as '10'.
The representation of '8' in octal is as follows:

Octal: 
  - The next number after '7' is '10' (which represents '8' in decimal).
  - This can be broken down as:
    - 10 (in octal) = 0 * 8^0 + 1 * 8^1
    - => 10 = (0 * 1) + (1 * 8) = 0 + 8 = 8

Summary:
- The octal number system is base-8 and uses digits from {0, 1, ..., 7}.
- The decimal number '8' is represented as '10' in octal.

*/



/*
                            Octal Number in JS 

Using the '0o' prefix to define an octal number in JavaScript (ES6 and later)
const octalNumber = 0o10; // This represents the decimal number 8
console.log(octalNumber); // Output: 8

Legacy octal syntax (deprecated in strict mode)
let legacyOctal = 010; // This also represents the decimal number 8
console.log(legacyOctal); // Output: 8

// Converting a decimal number to an octal string
let decimalNumber = 34; // Decimal number to convert
let octalString = decimalNumber.toString(8); // Convert to octal string
console.log(octalString); // Output: '42'

Note: Always prefer using '0o' prefix for octal literals in modern JavaScript.
*/

// const octalNum1 = 01 // Its depricated in ES6 
// console.log(octalNum1);

/*
// How to represent 237 in octal number system 
7 * 8^0 = 7 * 1 = 7
3 * 8^1 = 3 * 8 = 24
2 * 8^2 = 2 * 64 = 128 

Total 7 + 24 + 128 = 159
*/
// console.log(0o237);  // 159 in octal



console.log(parseInt('652524574' , 8));  // Convert to Octal Number 
console.log(parseInt(67542316, 8));  // Convert to Octal Number 

// Full Notes on Radix 2,8 etc 

let num = 123 
const newNum = num.toString(8)   // Decimal to octal 
console.log(newNum);


const digits = [1,2,3,4,5]
function digitsToNumber(array , radix = 10){
  return array.reduce((acc , cur , index)=>{
    return acc + cur * Math.pow(radix , array.length - index -1)
  },0)
}
console.log(digitsToNumber(digits,8));  // 5349

console.log(0o12345); //  5349