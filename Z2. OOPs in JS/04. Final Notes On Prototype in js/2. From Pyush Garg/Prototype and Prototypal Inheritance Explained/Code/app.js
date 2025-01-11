const p1 = {
    fname : "Sipun" ,
    lname : "Kumar" ,
    greet(){
        console.log(`hello ${this.fname} ${this.lname}`);
    }
}

// console.log(p1.greet());

// const p2 ={
//     fname : "Ankita" ,
//     lname : "XYZ" ,
//     greet(){
//         console.log(`hello ${this.fname} ${this.lname}`);
//     }
// }
// Here we break DRY Principle 

// So we can do like this 

const p2 = Object.create(p1)

console.log("P1 is " , p1);
console.log("P2 is " , p2); // {} empty Object 

console.log(p2.fname , p2.lname , p2.greet());