import fs from 'fs'

fs.readFile('read.txt', ((err, data)=>{
    if(err){
        console.log(err);
    }

   fs.appendFile('write.txt', `${data}`, ((err)=>{
    if(err){
        console.log(err);
    }
}) )
}))
