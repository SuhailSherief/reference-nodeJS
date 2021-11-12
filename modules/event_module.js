const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('hello_event', () => {
    console.log("Event has fired");
});
myEmitter.emit('hello_event');