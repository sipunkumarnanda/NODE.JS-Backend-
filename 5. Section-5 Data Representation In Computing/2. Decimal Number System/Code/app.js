const digitList1 = [2, 4, 6, 5];

const thousandthPlace = digitList1[3] * 1000;
const hundredthPlace = digitList1[2] * 100;
const tenthPlace = digitList1[1] * 10;
const onethPlace = digitList1[0] * 1;

const newDigits = thousandthPlace + hundredthPlace + tenthPlace + onethPlace;
// console.log(newDigits);

const num = 2 * 1 + 4 * 10 + 6 * 100 + 5 * 1000;
// console.log(num);

// Using Function
const digitList2 = [5, 6, 7, 8, 9];

function digitsToNumber(array) {
  let newNum = 0;

  array.forEach((digit, index) => {
    const num = digit * Math.pow(10, array.length - index - 1);
    newNum = newNum + num;
  });

  return newNum;
}

// let x = digitsToNumber(digitList2);
// console.log(x);

/*
// Behind the Scene in Math 

5462
2 * 10^3 mean 2 * 1 = 2   , Here Face Value is 2 , And Place Value is 2*1 = 2
6 * 10^2 mean 6 * 10 = 60 , Here Face Value is 6 , And Place Value is 6*10 = 60
4 * 10^1 mean 4 * 100 = 400 , Here Face Value is 4 , And Place Value is 4*100 = 400
5 * 10^0 mean 5 * 1000  = 5000 , Here Face Value is 5 , And Place Value is 5*1000 = 5000
*/

// using Reduce Method
function digitsToNumber2(array){
    // return array.reduce((acc , cur , index)=>{
    //    return   acc + cur * Math.pow(10 , array.length - index - 1)
    // },0)

    // One Liner 
    return array.reduce ((acc , cur , index) => acc + cur * Math.pow(10 , array.length - index - 1),0) ; 
}

console.log(digitsToNumber2(digitList2));