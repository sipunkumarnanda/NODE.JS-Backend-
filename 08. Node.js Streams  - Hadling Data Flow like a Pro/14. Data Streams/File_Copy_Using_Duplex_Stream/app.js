import fs from 'fs'
import { spawn } from 'child_process'

const writeStream = fs.createWriteStream("movie.mp4")

const childProcess = spawn('node', ['childApp.js'])

childProcess.stdout.pipe(writeStream)