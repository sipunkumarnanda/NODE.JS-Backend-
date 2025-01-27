// import fs from 'node:fs/promises'

// Rename File
// await fs.rename('newpic.png' , 'renamedPic.png')

// console.log("Renamed");

// copy file 
// await fs.copyFile('renamedpic.png' , 'nodejs.png') 

//cp Copy Entire Directory 
// await fs.cp('./src' , "C:\\Users\\Sipun Kumar Nanda\\OneDrive\\Desktop\\srcc" , {recursive : true})

// Move
// Rename method is used to both move and rename 
// await fs.rename("./nodejs.png" , "C:\\Users\\Sipun Kumar Nanda\\OneDrive\\Desktop\\move.png")

// await fs.rename("C:\\Users\\Sipun Kumar Nanda\\OneDrive\\Desktop\\move.png" , "C:\\Users\\Sipun Kumar Nanda\\OneDrive\\Desktop\\5. ProCoderr\\4. Section-4 Fundamentals of Node.JS\\22. Node.js File Operations-Rename , Delete , Move , Copy , & More\\Code\\x.png") // From Desktop to Code Folder 

// Delete 
// await fs.unlink('./x.png') 

// Delete Directory (Empty Directory)
// await fs.rmdir('./test')

// Delete file contained directory 
// await fs.rm('./test' , {recursive : true})

// Create 
// fs.writeFile('style.css' , "")  

// Create using appendFile
// fs.appendFile('styles.css' , " ")

// Create Directory 
// fs.mkdir('Test')

// State
// const stat = await fs.stat('./style.css')
// console.log(stat);

// Watch 
// import fs from 'fs'
// fs.watch('style.css' , ((eventType , fileName)=>{
//     console.log(eventType , fileName);
// }))

import { readFile } from 'fs/promises'; // Use fs/promises for promise-based methods
import { watch } from 'fs'; // Use fs for watching the file

 await watch('./file.txt' , async (eventType)=>{
    if(eventType === "change"){
        console.log(await readFile("./file.txt" , 'utf-8'));
    }
})