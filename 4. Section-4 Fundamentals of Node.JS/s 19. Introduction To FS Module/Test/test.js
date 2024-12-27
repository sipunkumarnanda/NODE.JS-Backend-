// function hello(a,b,c){
//     // return c(a,b)
//     let result = c(a,b)
//     return result
// }

// const apple = hello(10,20 , ((a,b)=>{
//     // console.log(a+b);
//     let result = a+b
//     // return a+b
//     return result
// }))
// console.log("apple" , apple);


const a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Func A Resolves After 5 sec");
    }, 5000);
});

const b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Func A Resolves After 1 sec");
        // const error = new Error("An error occurred after 1 sec");
        // reject(error.message);
    }, 1000);
});

(async function () {
    try {
        const result1 = await a;
        console.log("Resolved: ", result1);
    } catch (error) {
        console.log("Error: ", error);
    }

    try {
        const result2 = await b;
        console.log("Resolved: ", result2);
    } catch (error) {
        console.log("Error: ", error);
    }
})();




// console.log(a);
// a.then((data)=>{
//     console.log(data);
//     return data
// }).then((data)=>{
//     console.log("my Data is : " , data);
// }).catch((err)=>{
//     console.log(err);
// })