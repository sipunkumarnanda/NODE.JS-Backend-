
// Refer note - \Notes\2.object_create_and_prototype_chain.md

const p1 = {
    fname : "Sipun" ,
    lname : "Kumar" ,
    greet(){
        console.log(`hello ${this.fname} ${this.lname}`);
    }
}

// const p2 = Object.create(p1)

// Here Object.create Mean 
const p2 = {
    __proto__ : p1
}

// If we access something like this - p1.<property> , First it searches that property in p1 first , if not found then searches on __proto__ : {Object}

// Object.create(ObjectReference) mean {__proto__ : ObjectReference}




console.log("P1 is " , p1);
console.log("P2 is " , p2); // {} empty Object 
console.log(p2.fname);  // sipun

console.log("P1 before is : " , p1.fname);
p2.__proto__.fname = "Hack"
console.log("P1 after is : " , p1.fname);