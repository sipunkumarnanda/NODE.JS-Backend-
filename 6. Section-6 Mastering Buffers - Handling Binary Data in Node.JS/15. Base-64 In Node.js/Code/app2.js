import fs from 'fs/promises'

const bufferContent = await fs.readFile('favicon/favicon-16x16.png')

const a = bufferContent.toString("base64")

console.log(a);

fs.writeFile('new-file.txt', a)

// const data = await fs.readFile('new-file.txt', "utf-8")

// console.log(data);

// fs.writeFile('CreatedImg.png' , data, "base64")