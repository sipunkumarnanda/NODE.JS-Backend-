const a = new ArrayBuffer(4)
// console.log(a);

a[0] // we can't access ArrayBuffer like an array
a[0] = 55  // it will add like a property 
console.log(a);  
// Array Buffer is not editable , Then how can we Update ArrayBuffer ? Ans - Using TypedArray , DataView 