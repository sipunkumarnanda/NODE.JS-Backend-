const promise = new Promise((resolve, reject) => {
    console.log("Iam a promsise");
    setTimeout(()=>{
        resolve(123)
    },2000)
})
// console.log(promise); // Iam a promsise Promise { <pending> } , because we immediately try to print but it will resolved after 2 second , so we have to do like this 

promise.then((data)=>{
    console.log(data);
    return data
}).then((returnData)=>{
    console.log("Here is returned data : ",returnData , " Modified");
})







// function getCheese(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const cheese = "Cheese-🧀"
//             resolve(cheese)
//         },2000)
//     })
// }
// // const data = getCheese()

// getCheese().then((data)=>{
//     console.log(data);
// })