// Refer Note - \Notes\4. prototypal_inheritance_and_class_prototype_explanation.md

// Here how can we implement inheritance 
const p1 = {
    xp1 : "Iam inside P1" 
}
const p2 = {
    xp2 : "Iam inside P2", 
    // Here i want to inherit P1 
    __proto__ : p1
}
const p3 = {
    xp3 : "Iam inside P3" ,
    __proto__ : p2
}

console.log(p2.xp1);
console.log(p2.__proto__);  // Iam inside P1

console.log(p3.xp3);  // Iam inside P3
console.log(p3.xp2);  // Iam inside P2
console.log(p3.xp1);  // Iam inside P1
// This is called Prototypal Inheritance / Prototype Chain 

console.log("*********************************************************");
// Implement this thing using Object.create() To Check is this working or note 

const X1 = {
    xp1 : "Iam inside x1" 
}

let X2 = Object.create(X1)
X2.xp2 = "Iam Inside X2"
console.log(X2.xp1);

let X3 = Object.create(X2)
X3.xp3 = "Iam inside X3"
console.log(X3.xp3);
console.log(X3.xp2);
console.log(X3.xp1);

// -------------------------------
console.log("*******************************************");
let objTemp = {
    xp4: {
    value: "Hyy I am inside X4",
    writable: true,    // The property can be modified
    enumerable: true,  // The property will show up during enumeration (e.g., in `for...in`)
    configurable: true // The property descriptor can be changed
}
}

let x4 = Object.create(X3 , objTemp)


console.log(x4.xp1);
console.log(x4.xp2);
console.log(x4.xp3);
console.log(x4.xp4);

console.log("*******************************************");

let string = "Alisha"
console.log(string.__proto__); // String
console.log(string.__proto__.__proto__); // Object 
console.log(string.__proto__.__proto__.__proto__); // Null 

// Mean In String Case
// s.__proto__ = String.__proto__ = Object.__proto__ = Null

let number = 10
console.log(number.__proto__); // Number 
console.log(number.__proto__.__proto__); // Object 
console.log(number.__proto__.__proto__.__proto__); // Null 

// Mean In Number Case
// number.__proto__ = Number.__proto__ = Object.__proto__ = Null

let boolean = true
console.log(boolean.__proto__); // Boolean 
console.log(boolean.__proto__.__proto__); // Object 
console.log(boolean.__proto__.__proto__.__proto__); // null

// Mean In Boolean Case
// boolean.__proto__ = Boolean.__proto__ = Object.__proto__ = Null

console.log("*******************************************");

class Student {
    constructor(){
        this.fname = "Sipun"
    }

    getName (){
        return this.fname
    }
    greet(){
        console.log("Hello Goodmorning " , this.fname);
    }
}

console.log(Student.prototype); // {getName: ƒ, greet: ƒ}

const s1 = new Student()
console.log(s1.fname);
console.log(s1.getName());
console.log(s1.greet());

// Mean
// console.log(s1.__proto__ === Student.prototype); // true

console.log("****************************************");
const s2 = {
    __proto__ : Student.prototype
}


console.log(s2.fname);  // Undefines 
console.log(s2.greet()); // Hello Goodmorning  undefined

console.log(s2 instanceof Student);  // true