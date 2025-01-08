function getCheese(callback){
    setTimeout(()=>{
        const cheese = "🧀"
        console.log("Here is Cheese : " , cheese);
        callback(cheese)
    },2000)
    
}
function makeDough(cheese , callback){
    setTimeout(()=>{
        // console.log(cheese);
        const dough = cheese + "🍩"
        console.log("Here is dough : " , dough);
        callback(dough)
    },2000)
    
}
function bakePizza(dough, callback){
    setTimeout(()=>{
        const pizza = dough + "🍕"
        console.log("Here is Pizza : " , pizza);
        callback(pizza)
    })
}

// Function calling
getCheese(function(cheese){
    // console.log(cheese);
    makeDough(cheese , function(dough){
        // console.log(dough);
        bakePizza(dough , function(pizza){
            console.log("Got My Pizza : " , pizza);
        })
    })
})