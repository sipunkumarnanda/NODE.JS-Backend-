import fs, { appendFileSync } from 'fs'

// uisng async 

// console.time()

// for(let i = 1 ; i<=5000 ; i++){
//     let num = i + '\n'; 

//     fs.appendFileSync('number.txt', num)

//     // default: 2.274s
// }

// console.timeEnd()



// Using Sync

console.time()
for(let i = 1 ; i<=5000 ; i++){
    if(i === 1){
        fs.writeFile('number.txt', `${i}, `, ((err)=>{
            if(err){
                console.log(err);
            }
        }))
    }
else{
fs.appendFile('number.txt', `${i}, `, ((err)=>{
    if(err){
        console.log(err);
    }
    if(i === 5000){
        console.timeEnd()
    }

    // default: 1.377s
}))
}
}