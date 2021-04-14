class EventEmitter{
  constructor() {
    this.list = {}
  }
  on(event,fn) {
        (this.list[event]||(this.list[event]=[])).push(fn)
  }
  emit(event) {
    if (!this.list[event]) throw new Error(`${event} is not define`)
    let args = Array.prototype.slice.call(arguments, 1)
    this.list[event].forEach(fn=>fn.apply(this,args))
  }
}
let event = new EventEmitter()
event.on('use1',()=>console.log('use1'))
event.on('use1', () => console.log('use2'))
event.emit('use2')
