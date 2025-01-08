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
            // resolve(pizza)
            reject("Bed Pizza")
        },2000)
    })
}
async function call() {
    try{
        const cheese = await getCheese()
    console.log("Here is Cheese : " , cheese);

    const dough = await makeDough(cheese)
    console.log("Here is Dough : " , dough);

    const pizza = await bakePizza(dough)
    console.log("Here is your Pizza : " , pizza);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("Process ended ");
    }
}

call()