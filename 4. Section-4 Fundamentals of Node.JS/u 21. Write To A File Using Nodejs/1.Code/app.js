import { readFile, writeFile } from 'node:fs'
import fs from 'node:fs/promises'

/*
fs.writeFile('file-1.txt' , "Hyyy Ram is a Good Boy , He Codes Daily..... ")

// const fileContent = "Hello Babu"
// fs.writeFile('file-1.txt' , fileContent) // If we try to write on an existing file content , its overwrite on previous content . 

// How to Avoid that 
// ANS -> By using fs.appendFile

const fileContent2 = "Iam File Content - 2 "
fs.appendFile('./file-1.txt' , fileContent2)

const data = await fs.readFile('./file-1.txt' , "utf-8" )
console.log(data);

*/

// On the above code we Noticed a deaily while writing and append becasue of asynchronous nature 
// To Fixed That 

// To fix the delay issue and ensure proper sequencing, use `await` before the asynchronous functions like `fs.appendFile`.

// Like The bellow Code 
// await fs.writeFile('file-1.txt' , "Hyyy Ram is a Good Boy , He Codes Daily..... ")

// const fileContent = "Hello Babu"
// fs.writeFile('file-1.txt' , fileContent) // If we try to write on an existing file content , its overwrite on previous content . 

// How to Avoid that 
// ANS -> By using fs.appendFile

await fs.writeFile('file-1.txt' , "Hyyy Ram is a Good Boy , He Codes Daily..... ")

const fileContent2 = "\nIam File Content - 2 "
await fs.appendFile('./file-1.txt' , fileContent2)

// const data = await fs.readFile('./file-1.txt' , "utf-8" )
// console.log(data);

// await fs.writeFile("C:/Users/Sipun Kumar Nanda/OneDrive/Desktop//file-1.txt", data)  // Write on desktop 

// await fs.writeFile("C:\\Users\\Sipun Kumar Nanda\\OneDrive\\Desktop\\file-1.txt", data)  // we can write windows path like this \\ double back slash .  

// Using Buffer
const contentBuffer = await fs.readFile('./file-1.txt')
// console.log(contentBuffer);

// await fs.writeFile("C:\\Users\\Sipun Kumar Nanda\\OneDrive\\Desktop\\file-1.txt" , contentBuffer)

// Read Image and write on desktop
try {
  const img = await fs.readFile("./Screenshot (17).png");
  // console.log(img);

  await fs.writeFile(
    "C:\\Users\\Sipun Kumar Nanda\\OneDrive\\Desktop\\nodejsjpg.png",
    img
  );
} catch (error) {
    // console.log(error.message);
    fs.appendFile('./error.log' , `${new Date().toLocaleTimeString()} \n ${error.message} \n ${error.stack} \n \n \n `)
    console.log("To see the full error mesage go to error.log fi");
}