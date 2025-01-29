import eventEmitter from 'events'

const emitter = new eventEmitter()

emitter.on("x", ((a,b)=>{
    console.log("X event is fired");
    console.log(`Value of a is ${a} , b is ${b}`);
}))

emitter.on("y", (()=>{
    console.log("Y event is fired for 1");
}))

emitter.on("y", (()=>{
    console.log("Y event is fired 2");
}))

emitter.once("z", (()=>{
    console.log("Z event is fired");
}))

emitter.emit("x", 10, 20)
emitter.emit("y")
emitter.emit("z")
emitter.emit("z")