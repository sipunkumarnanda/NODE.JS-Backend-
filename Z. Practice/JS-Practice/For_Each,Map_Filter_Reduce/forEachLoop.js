const array = [1,21,30,40,5]

const array2 = array.forEach((item)=>{
    return item
})
console.log(array2);  // Undefined  Because forEach loop doesn't return anything

const array3 = array.forEach((item)=>{
    return item > 10
})
console.log(array3);  // undefined Because forEach loop doesn't return anything

//

let emptyArr = []
array.forEach((item)=>{
    if(item>10){
        emptyArr.push(item)
    }
})
console.log(emptyArr);



// Note - ForEach loop Doesn't return anything . 