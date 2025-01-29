class CustomEventEmitter{

    constructor(){
        this.events = {}
    }

    on(eventName, callBackFunc){
        if(!this.events[eventName]){
            this.events[eventName] =  []
        }
        this.events[eventName].push(callBackFunc)
    }

    emit(eventName, ...param){
        if(this.events[eventName]){
            this.events[eventName].forEach(item => {
                item(...param)
            });
        }
    }

    print(){
        console.log(this.events);
    }
}


const emitter = new CustomEventEmitter()

emitter.on("x", (()=>{
    console.log("X event fired");
}))
emitter.on("x", (()=>{
    console.log("X event fired-2");
}))

emitter.on("y", ((name, age)=>{
    console.log("Y event fired");
    console.log(`Hello ${name} , Are ${age} Years old ?`);
}))

emitter.print()

emitter.emit("x")
emitter.emit("y", "Ankita", "20")
emitter.emit("z")