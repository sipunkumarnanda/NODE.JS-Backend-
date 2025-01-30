import fs from 'fs/promises'

const contentBuffer = await fs.readFile('chars.txt')

console.log(contentBuffer);
console.log(contentBuffer.byteLength);
console.log(contentBuffer.toString("utf-8"));