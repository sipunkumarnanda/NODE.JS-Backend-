import fs from 'fs/promises'

// const bufferContent = await fs.readFile("C:\\Users\\Sipun Kumar Nanda\\OneDrive\\Pictures\\Screenshots\\Screenshot (567).png")

// const a = bufferContent.toString("base64")

// console.log(a);

// fs.writeFile('MvImg.txt', a)

const data = await fs.readFile('MvImg.txt', "utf-8")

console.log(data);

fs.writeFile('mv.png' , data, "base64")