import fs from 'fs'

const readStream = fs.createReadStream("C:\\Users\\Sipun Kumar Nanda\\Downloads\\Game.Changer.2025.720p.HEVC.DS4K.WEB-DL.Hindi.5.1-Telugu.x265-HDHub4u.Tv.mkv")

readStream.pipe(process.stdout)