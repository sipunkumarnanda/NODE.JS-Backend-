let i = 0 
const timerId = setInterval(()=>{
    console.log(i++);
    if(i === 15){
        clearInterval(timerId)
    }
},2)
console.log(timerId);