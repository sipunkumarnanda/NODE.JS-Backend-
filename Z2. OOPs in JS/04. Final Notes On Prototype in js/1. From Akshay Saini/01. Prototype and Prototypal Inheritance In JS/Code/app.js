let arr = ["Sipun" , "Akshay"]

let object = {
    name : "Sipun" , 
    city : "Bhubaneswar" ,
    getIntro : function(){
        console.log(this.name + " From " + this.city);
    }
}

let object2 = {
    name : "Akankshya"
}

object2.__proto__ = object
// console.log(object2.__proto__);

console.log(object2.city);
console.log(object2.getIntro());



























// console.log(arr.__proto__);
// console.log(Array.prototype);

// console.log(arr.__proto__.__proto__);
// console.log(Object.prototype);

// console.log(arr.__proto__.__proto__.__proto__);