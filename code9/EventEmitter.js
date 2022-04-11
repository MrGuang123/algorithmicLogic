
// please complete the implementation
class EventEmitter {
  constructor() {
    this.eventMap = {}
  }
  subscribe(eventName, callback) {
    if (!this.eventMap[eventName]) {
      this.eventMap[eventName] = []
    }

    this.eventMap[eventName].push(callback)

    return {
      release: this._release(eventName, this.eventMap[eventName].length - 1)
    }
  }

  _release(eventName, index) {
    return () => {
      this.eventMap[eventName].splice(index, 1)
    }
  }

  emit(eventName, ...args) {
    if (this.eventMap[eventName]) {
      this.eventMap[eventName].forEach(callback => {
        callback(...args)
      })
    }
  }
}