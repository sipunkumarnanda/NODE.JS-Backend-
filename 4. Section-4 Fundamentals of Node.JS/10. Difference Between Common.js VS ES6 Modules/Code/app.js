// Common JS 
// const timer = require('./timer.js')
// cjs imports are not hoisted .
// ->>  Loads File Synchroniously 
// Top level await is not allowed 
// Only one value can be exported in cjs .
// Strict mode is not enabled by default .
// File extension optional . 
// If we give Full file path Then We can load any file using cjs
// It is convention to add cjs in the file extension .
// It is optional to set "type" : "commonjs" in package.json, Because commonjs is the default module system of nodejs .
// In cjs this keywords points to module.exports bydefault . 
// File name access by __filename


// ES6 Modules
// import timer from './timer.js'
// mjs imports are hoisted 
// Asynchronous File loading 
// Top level await is allowed . 
// Multiple value can be exported in mjs .
// Strict mode is  enabled by default . 
// File extension mandatory 
// We can not load any file , Only extension having js and mjs file  are allowed .
// It is convention to add mjs in the file extension .
// We have to set "type" : "module" in package.json to access ES 6 Module Properties .
// In mjs this keywords is undefined . 
// File name access by import.meta.filename 
