// Binary => Base 2 {0,1}

// 10 - 0 * 2^0 = 0 * 1 = 0
//      1 * 2^1 = 1 * 2 = 2

const binNum1 = 0b10
console.log(binNum1);

console.log(parseInt('11' , 2));
console.log(parseInt('101' , 2));

// convert 898 to binary 
const number = 89
console.log(number.toString(2));

function convertToNumber(array){
  const binObj = {0 : 0 , 1 : 1}
  return array.reduce((acc , cur , index)=>{
    if(!(cur in binObj)){
      return new Error ("It is not an binary Number")
    }else{
      return acc + cur * Math.pow(2, array.length - index - 1)
    }
  },0)
}

const numbers = [1,0,0,1,1]
console.log(convertToNumber(numbers));  // 19

console.log(parseInt("10011" , 2));  // 19

const decimalnum = 19 
console.log(decimalnum.toString(2));   // 10011