import fs from 'node:fs/promises'



setInterval(()=>{
    const currentTime = new Date()
// // console.log(currentTime);

// let hour = currentTime.getHours()
// const minute = currentTime.getMinutes()
// const second = currentTime.getSeconds()

// let period = null 
// if(hour>12){
//     period = "PM"
// }
// else{
//     period = "AM"
// }

// //
// if(hour>12){
//     hour = hour % 12
// }

// console.log(`${hour}:${minute}:${second} ${period}`);
// let time = `${hour}:${minute}:${second} ${period}`

// ShortCut
let time = currentTime.toLocaleTimeString()
fs.writeFile("./time.txt" , time)
},500)