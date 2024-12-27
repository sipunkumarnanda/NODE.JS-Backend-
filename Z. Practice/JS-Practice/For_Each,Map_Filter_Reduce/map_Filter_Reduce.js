const array = [10,20,30,40,50,60,70,80,90,100]

// Map 
const mapArray = array.map((item)=>{
    return item+10
})
// console.log(array);
// console.log(mapArray);

// filter 
const filterArray = array.filter((item)=>{
    return item > 50
})
// console.log(array);
// console.log(filterArray);

// Reduce 
const reduceArray = array.reduce((acc,currval)=>{
    return acc + currval
},10)
// console.log(reduceArray);

// Filter 
const stringArray = ["apple   " ,"   " , "   " , "ball" , "Pencil" , "Dog" , "" , "Aeroplane" , "  " , "  "]

let trimArray = []

stringArray.forEach((item)=>{
    let a = item.trim()
    trimArray.push(a)
})
// console.log(trimArray);
const filteredArray = trimArray.filter((value)=> value)
console.log(filteredArray);
/*
filter((w) => w) removes all falsy values from the array, including the empty string "", 
but it does not remove strings that contain spaces because strings with spaces are truthy.
Falsy values in JavaScript include false, 0, "" (empty string), null, undefined, and NaN.
If you want to remove strings with only whitespace, you would need to use w.trim() inside the filter method (as explained earlier).
*/