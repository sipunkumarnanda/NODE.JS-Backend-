// Decimal => Base 10 {0 to 9}
// Octal => Base 8 {0 to 8}
// Hexadecimal => Base 16 {0 to 9 , A,B,C,D,E,F}
// Binary => Base 2 {0 and 1}

// For Represent Hexadecimal in JS
// 0x843
console.log(0x843); // 2115

// 843
// 3*16^0 = 3*1 = 3
// 4*16^1 = 4*16 = 64
// 8*16^2 = 8 * 256 = 2048

// Total 3 + 64 + 2048 = 2115

const hexNum1 = 0x843;

const a = 2115;
console.log(a.toString(16)); // 843

// convert 45A to decimal
// A * 1 = 10
// 5 * 16^1 = 80
// 4 * 16^2 = 1024
// Total = 1114

const num2 = 0x45a;
console.log(num2.toString(10)); // 1114

console.log(parseInt("0x450", 16)); // 1104

console.log("*****************************************************");

const HexadecimalNumbers = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  0: 0,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};

// let key = 0
// if(key in HexadecimalNumbers){
//   console.log(`Key available and that key is ${key} and Value ${HexadecimalNumbers[key]}`);
// }

function convertToNumber(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array of hexadecimal digits.");
  }
  return array.reduce((acc, cur, index) => {
    if (!(cur in HexadecimalNumbers)) {
      throw new Error("It is not an hexadecimal number");
    } else {
      return (
        acc + HexadecimalNumbers[cur] * Math.pow(16, array.length - index - 1)
      );
    }
  }, 0);
}

const hexadecima2 = [1, 2, 9, "F", 0];
console.log(convertToNumber(hexadecima2)); // 76272

console.log(parseInt("129F0", 16)); // 76272
