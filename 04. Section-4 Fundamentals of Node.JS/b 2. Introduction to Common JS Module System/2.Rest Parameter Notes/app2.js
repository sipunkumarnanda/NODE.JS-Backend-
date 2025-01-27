function sum(...nums){
    console.log(nums);   // [ 1, 2 ]  OR [num1, num2, num3 and , So on ] then here we can apply reduce method on Array 
    return nums.reduce((curr , acc)=> curr + acc)
}
// console.log(sum(1,2))


// console.log("Hello");

module.exports = {
    sum
}