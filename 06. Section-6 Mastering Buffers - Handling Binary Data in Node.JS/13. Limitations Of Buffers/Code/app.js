import fs from 'fs/promises'

const a = await fs.readFile("C:\\Users\\Sipun Kumar Nanda\\Downloads\\Squid.Game.S02.E01.720p.10Bit.WEB-DL.Hindi.5.1-English.2.0.ESub.x264-HDHub4u.Tv.mkv")

const b = await fs.readFile("C:\\Users\\Sipun Kumar Nanda\\Downloads\\Squid.Game.S02.E01.720p.10Bit.WEB-DL.Hindi.5.1-English.2.0.ESub.x264-HDHub4u.Tv.mkv")

const c = await fs.readFile("C:\\Users\\Sipun Kumar Nanda\\Downloads\\Squid.Game.S02.E01.720p.10Bit.WEB-DL.Hindi.5.1-English.2.0.ESub.x264-HDHub4u.Tv.mkv")

const d = await fs.readFile("C:\\Users\\Sipun Kumar Nanda\\Downloads\\Squid.Game.S02.E01.720p.10Bit.WEB-DL.Hindi.5.1-English.2.0.ESub.x264-HDHub4u.Tv.mkv")

const  e= await fs.readFile("C:\\Users\\Sipun Kumar Nanda\\Downloads\\Squid.Game.S02.E01.720p.10Bit.WEB-DL.Hindi.5.1-English.2.0.ESub.x264-HDHub4u.Tv.mkv")

const f = await fs.readFile("C:\\Users\\Sipun Kumar Nanda\\Downloads\\Squid.Game.S02.E01.720p.10Bit.WEB-DL.Hindi.5.1-English.2.0.ESub.x264-HDHub4u.Tv.mkv")

console.log(a.byteLength);
console.log(b.byteLength);
console.log(c.byteLength);
console.log(d.byteLength);
console.log(e.byteLength);
console.log(f.byteLength);

console.log("End");