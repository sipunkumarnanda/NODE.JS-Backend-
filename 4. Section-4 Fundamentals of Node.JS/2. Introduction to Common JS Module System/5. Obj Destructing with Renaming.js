const person = {
    name: 'John',
    age: 30
  };
  
  function printDetails({ name: fullName, age: years }) {
    console.log(fullName);
    // console.log(`Name: ${fullName}, Age: ${years}`);
  }
  
//   printDetails(person);  // Outputs: Name: John, Age: 30

printDetails({name:"Ankita" , agee : 20} )


const obj1 = {
    name : "Akankshya" ,
    age : 22
}

const {name : fullName , age : years } = obj1 ;
console.log(`My name is ${fullName} And i am ${years} old . `);

/* Explanation 
It uses object destructuring with renaming:
name is extracted from the passed object and renamed to fullName.
age is extracted from the passed object and renamed to years.
*/