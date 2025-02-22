import fs, { read } from 'fs'

import { Readable, Writable, Duplex, Transform, PassThrough } from 'stream'; 

console.time()

const readStream = fs.createReadStream("C:\\Users\\Sipun Kumar Nanda\\Downloads\\Game.Changer.2025.720p.HEVC.DS4K.WEB-DL.Hindi.5.1-Telugu.x265-HDHub4u.Tv.mkv", {highWaterMark : 1 * 1024 * 1024})

const writeStream = fs.createWriteStream('data.mp4', {highWaterMark : 1 * 1024 * 1024})


readStream.pipe(writeStream)