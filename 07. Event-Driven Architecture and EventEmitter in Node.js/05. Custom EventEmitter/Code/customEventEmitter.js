class MyEventEmitter{
    constructor(){
        this._events = {}
    }

    on(eventsName, handler){
        if(this._events[eventsName]){
            this._events[eventsName].push(handler)
        }
        else{
            this._events[eventsName] = [handler]
        }
    }

    emit(eventName, ...args){
        if(this._events[eventName]){
            this._events[eventName].forEach(event => {
                event(...args)
            });
        }
    }

    prints() {
        console.log(this._events);
    }
}


const emitter = new MyEventEmitter()

emitter.on("x", (()=>{
    console.log("X event is Fired");
}))

emitter.on("y", ((a, b, c)=>{
    console.log("Y event is Fired");
    console.log(`Hello ${a}, ${b}, ${c}`);
}))


// emitter.prints()
emitter.emit("x")
emitter.emit("y", 1, 2, 3) 