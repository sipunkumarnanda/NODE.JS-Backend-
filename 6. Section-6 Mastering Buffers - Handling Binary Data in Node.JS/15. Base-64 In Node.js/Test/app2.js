import fs from 'fs/promises';

const a = await fs.readFile('file.txt', "base64")
console.log(a);

fs.writeFile("loveMessage.txt", a) 