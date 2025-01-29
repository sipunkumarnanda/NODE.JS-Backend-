import EventEmitter from "events";

// Importing the EventEmitter class from the "events" module.

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Set the maximum number of listeners for any single event to 2
emitter.setMaxListeners(2);

// Registering an event listener for the 'abc' event
emitter.on('abc', () => {
    console.log("abc Event fired");
});

// Registering the first listener for the 'y' event
emitter.on('y', () => {
    console.log("1st Y Event fired");
});

// Registering a listener for the 'x' event
emitter.on('x', () => {
    console.log("X Event fired");
});

// Registering the second listener for the 'y' event
emitter.on('y', () => {
    console.log("2nd Y Event fired");
});

// Uncomment the following block to add a third listener to 'y'.
// Note: Since the maximum listeners are set to 2, this would throw a warning.
// emitter.on('y', () => {
//     console.log("3rd Y Event fired");
// });

console.log(emitter); // Display the emitter object with registered events
// console.log(emitter._events); // Uncomment to see the internal _events object (not recommended for production use)

// Emitting the 'abc' event, triggering its listener
emitter.emit('abc');

// Emitting the 'x' event, triggering its listener
emitter.emit('x');

// Emitting the 'y' event, triggering both registered listeners
emitter.emit('y');

// Emitting the events again to verify multiple firing
emitter.emit('abc');
emitter.emit('x');
emitter.emit('y');

// Using the `.once()` method to register a one-time listener for the 'xy' event
emitter.once("xy", () => {
    console.log("xy event fired");
});

// Trying to emit the 'xy' event multiple times
console.log(emitter._events); // Logs all registered events before emitting 'xy'
emitter.emit('xy'); // Fires the 'xy' event for the first time (triggers the listener)
emitter.emit('xy'); // Subsequent emissions won't trigger the listener
emitter.emit('xy'); // Subsequent emissions won't trigger the listener
console.log(emitter._events); // Logs all registered events after emitting 'xy'

// Explanation:
// - The 'xy' event is registered using `.once()` and will only fire once, regardless of how many times it's emitted.
// - The 'y' event has two listeners, and both are triggered each time the 'y' event is emitted.
// - The maximum number of listeners is set to 2, so adding a third listener to any event would raise a warning.
