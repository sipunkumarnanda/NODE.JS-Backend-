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

    emit(eventName){
        if(this.events[eventName]){
            this.events[eventName].forEach(item => {
                item()
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

emitter.on("y", (()=>{
    console.log("Y event fired");
}))

emitter.print()

emitter.emit("x")
emitter.emit("y", "Ankita", "20")
emitter.emit("z")