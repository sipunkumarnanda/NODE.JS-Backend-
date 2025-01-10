function sayHi(){
   const obj1 = {
        name : "Obj1"
    }
    return obj1
}


// sayHi()
// new sayHi()

// const obj1 = new sayHi()
// console.log(obj1);  // { name: 'Obj1' }


function createUser(firstName, lastName, age){
    this.firstName = firstName
    console.log(this);
}

const obj = new createUser("Amrita")
console.log(obj);  // createUser { firstName: 'Amrita' }
console.log(obj.firstName)


// Behind The scene 
/*
const obj = new createUser("Amrita") // When we invoke createUser function with new keyword an empty object {} is created and along with this empty object aruments like here "Amrita" is pass to the function and insdie that function this refer to the {} empty object and by this.firstName = "Amrita" set to the object now object has {firstName : "Amrita"} and implicitly return to where invoked 
console.log(obj);  // createUser { firstName: 'Amrita' }
console.log(obj.firstName)

function createUser(firstName, lastName, age){
    this.firstName = firstName
    console.log(this);
}
    */
