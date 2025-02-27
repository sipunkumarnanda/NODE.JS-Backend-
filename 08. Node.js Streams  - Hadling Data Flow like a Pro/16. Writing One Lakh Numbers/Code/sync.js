import fs from 'fs'

console.time()

// for(let i=1 ; i<=100000 ; i++){
//     if(i===1){
//         fs.writeFileSync('numbers.txt', `${i}, `)
//     }else{
//         fs.appendFileSync('numbers.txt', `${i}, `)
//     }
// }

// console.timeEnd()

// Time - default: 36.250s


// Using Stream 

const writeStream = fs.createWriteStream('streamNumbers.txt')

for(let i=1 ; i<= 100000 ; i++){
    writeStream.write(`${i}, `)
}

writeStream.end()

writeStream.on('finish', (()=>{
    console.timeEnd()
}))

// Time - default: 527.849ms