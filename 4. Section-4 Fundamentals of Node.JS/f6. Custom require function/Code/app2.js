// const b = require('./math')


function loadModule(path){

     function makePath(path){
        if(path.endsWith(".js")){
            return path
        }
        else{
            let newPath = `${path}.js`
            return newPath
        }
     }

     let correctPath = makePath(path)
     
     const fs = require('fs')
    const fileContent = fs.readFileSync(correctPath).toString();

    (function(send){
        // Module code goes here
        eval(fileContent)
        console.log(send);
    })({})
}

const b = loadModule('./math')
// console.log(b);