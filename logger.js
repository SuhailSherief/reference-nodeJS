const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter{
    get(msg)
    {
        this.emit('event', { id: uuid.v4(), msg });
    }
}

module.exports = Logger;