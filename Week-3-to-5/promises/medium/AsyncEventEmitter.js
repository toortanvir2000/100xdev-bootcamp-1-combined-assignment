
// Problem Description – Async Observer Event Emitter
//
// You are required to implement an AsyncEventEmitter that supports async listeners.
//
// The emitter must provide:
// 1. on(event, listener): register an async listener for an event
// 2. emit(event, data): trigger all listeners for that event
//
// The emit() method must return a Promise that resolves only after all listeners
// have finished execution (use Promise.allSettled).


class AsyncEventEmitter {
  constructor() {
    this.events = {};
  }
  on = function (event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }
  emit = function (event, data) {
    if (!this.events[event]) return Promise.resolve([]);
    const promises = this.events[event].map(async (listener) => {
      return await listener(data);
    });
    return Promise.allSettled(promises);
  }
}

module.exports = AsyncEventEmitter;
