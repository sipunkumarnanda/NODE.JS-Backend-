const colors = ["red", "green", "Yellow", "Pink", "black"];
console.log(colors);

// Destructuring the array to assign the first, second, and third elements to variables
const [color1, cl2, cl3, a, b, extra] = colors;
console.log(color1, cl2, cl3, a, b, extra); // red green Yellow Pink black undefined

// Skipping element like this 
const [,,,fourthElem] = colors
console.log(fourthElem);

// Access by Index and Rename 
const {2 : thirdCl , 0 : firstCl} = colors
console.log(thirdCl ,firstCl);

// Array Destructuring in Function Parameters
function colorFilter([a,b]){  // Here it works as - a is 0th Index , b is 1st Index 
    console.log(a,b);
}
colorFilter(colors)

//  Array Destructuring in Function Parameters , by index number 
function hello({1 : secondIndex , 5 : sixIndex}){
    console.log(secondIndex , sixIndex);
}
hello(colors)  // green undefined because 6th Index is Not available


// Error handling 
function helloo(arr) {
    const { 1: secondIndex, 7: sixIndex = "Error: Not Present on Array" } = arr;

    console.log(secondIndex);  // Accessing index 1
    console.log(sixIndex);     // Accessing index 5 with error handling
}


helloo(colors); 
// Output:
// green
// Error: Not Present on Array
