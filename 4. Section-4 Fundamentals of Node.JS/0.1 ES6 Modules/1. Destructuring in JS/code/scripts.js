// Array Destructuring
const colors = ["red", "green", "Yellow", "Pink", "black"]
console.log(colors);

// const color1 = colors[1]
// const color2 = colors[2]
// const color3 = colors[3]

const [color1 , cl2 , cl3 , a ,b , extra] = colors
console.log(color1 , cl2 , cl3 , a ,b , extra); // red green Yellow Pink black undefined

// Suppose now i want 2nd index value which is Yellow , How can i get it by using Destructuring 
const [,,thirdclr] = colors  // here we can skip by ,
console.log(thirdclr);


// Suppose there are 100 elements in array and i want 90th indexed value then how can i get it 
const {3 : colorr4} = colors
console.log(colorr4);

const {3 : cll5 , 0: cl1 , 4: cl4} = colors
console.log(cl1 ,cll5 , cl4);

const user = {
    name : "Sipun" ,
    age : 23 ,
    address : {
        city : "BBSR" ,
        State : "Odisha"
    }
}

// const age = user.age
// const name = user.name
// console.log(name ,age);

// By destructuring
// const { name, age, job} = user;  
// console.log(name ,age, job);
// In object destructuring. It checks if the 'user' object has properties 'name' and 'age'. If they exist, their values are assigned to variables 'name' and 'age' respectively. Unlike array destructuring, the variable names do not need to be in order; they simply match the property names in the object.

// How to rename during Object destructuring
const { name : username , age : userage, job } = user;  
console.log(username ,userage, job);

// const {address} = user
// console.log(address);

// When you want value of city which is insdie address object
// const  {address : {city}} = user
// console.log(city);

// Multi level destructuring 
const {address : {city , State}} = user
console.log(city , State);

// Some People Do like this but its not more efficient 
// const {address} = user
// const {city} = address
// console.log(city);


// Obj Destructure inside Parameters 
function intro({age , name}){
    console.log(age , name);
}
intro(user)

// Array Destructure inside Parameters 
function printColors([a, b]){
    console.log(a , b);
}
// By index 
function printColors2({2 : thirdCl , 0: firstCl , 4 : lastCl}){
    console.log(thirdCl, firstCl, lastCl);
}
printColors2(colors)