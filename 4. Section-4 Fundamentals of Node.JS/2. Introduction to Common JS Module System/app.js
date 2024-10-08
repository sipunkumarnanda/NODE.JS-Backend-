// const math = require('./math')

// Using Object Destructuring 
const { sum , product} = require('./math')
// const {product , sum} = require('./math')  // Order could be different 

// Using Array destructuring 
// const [sum , product] = require('./math') 

// During exports If Given a String like this => "SIPUN"
// const [sum , product] = require('./math')  // OUTPUT => S I 
// console.log(sum,product);

// Explanation 
// const [sum , product] = "SIPUN"  // OUTPUT => S I
// console.log( sum , product);


// console.log(math);

// const sum = math.sum 
// const product = math.product

// Destructure This 
// const {sum , product } = math

console.log(sum(1,2,3,4));
// console.log(sum); it will return retun_value of require function (What require returns)
console.log(product(1,2,3,4));


// const math = require('./math')
// console.log(math);  // { }

// console.log("End");