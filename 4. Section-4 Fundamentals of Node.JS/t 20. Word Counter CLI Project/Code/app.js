import { readFile } from 'node:fs/promises'

// console.log(process.argv);
const filePath = process.argv[2]

const fileContent = await readFile(filePath , 'utf-8')
// console.log(fileContent.split(/[\W]/));
// console.log(fileContent.split(/[\W]/).filter((w) => w));
const wordArray = fileContent.split(/[\W]/).filter((w) => w)
// console.log(wordArray);

const wordsCount = {}
wordArray.forEach((word)=>{
    if(word in wordsCount){
        wordsCount[word] += 1
    }else{
        wordsCount[word] = 1
    }
})
// console.log(wordsCount);

/*
Explanation - 
console.log(process.argv);

[
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\Sipun Kumar Nanda\\OneDrive\\Desktop\\5. ProCoderr\\4. Section-4 Fundamentals of Node.JS\\20. Word Counter CLI Project\\Code\\
  app.js',
    './file-2.txt'
  ]

  const filePath = process.argv[2]  // ./file-2.txt

  */


  // Task 3rd arguments word count 

const obj = {}
const thirdArg = process.argv[3]
// obj[thirdArg] = 0 
wordArray.forEach((word)=>{
    if(word === thirdArg){
        // obj[thirdArg] += 1  // Initialize obj[thirdArg] to 0 to avoid undefined + 1 = NaN
        obj[thirdArg] = (obj[thirdArg] || 0) + 1; // Initialize to 0 if not present, then increment
    }
})
console.log(obj);
  
/*
When the line obj[thirdArg] = 0 is commented out, the first time the code tries to increment obj[thirdArg] using obj[thirdArg] += 1, it is effectively doing:
javascript
Copy code
obj[thirdArg] = undefined + 1; // undefined + 1 => NaN
*/