function getCheese(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const cheese = "Cheese-🧀"
            // console.log("Here is Cheese : " , cheese);
            resolve(cheese)
        },2000)
    })
}
function makeDough(cheese){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dough = cheese + "🍩"
            // console.log("Here is dough : ",dough);
            resolve(dough)
            // reject("Bed Dough")
        },2000)
    })
}
function bakePizza(dough){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const pizza = dough + "🍩"
            // console.log("Here is Pizza : ",pizza);
            resolve(pizza)
            // reject("Bed Pizza")
        },2000)
    })
}

// Function calling 

// getCheese().then((data)=>{   // here we know , we get cheese by calling getCheese func , Here data = Cheese
//     console.log("Here is Cheese : " , data);
//     return makeDough(data)  // here data = cheese
// }).then((data)=>{
//     console.log("Here is dough : ",data);
//     return bakePizza(data)  // here data = dough
// }).then((data)=>{
//     console.log("Here is Pizza : ",data);
// })

// For simlification 
getCheese().then((cheese)=>{   // here we know , we get cheese by calling getCheese func , Here data = Cheese
    console.log("Here is Cheese : " , cheese);
    return makeDough(cheese)  // here data = cheese
}).then((dough)=>{
    console.log("Here is dough : ",dough);
    return bakePizza(dough)  // here data = dough
}).then((pizza)=>{
    console.log("Here is Pizza : ",pizza);
}).catch((error)=>{
    console.log("Error occured : " , error);
}).finally(()=>{
    console.log("Process End");
})