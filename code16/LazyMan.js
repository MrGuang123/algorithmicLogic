// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
// LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

class LazyManClass {
  constructor(name) {
    this.name = name
    this.pipeLine = []
    this.pipeLine.push(() => console.log(`Hi! This is ${this.name}!`))

    Promise.resolve().then(async () => {
      while (this.pipeLine.length > 0) {
        const pipe = this.pipeLine.shift()
        await pipe()
      }
    })
  }
  _sleep(time) {
    return () => new Promise(resolve => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        resolve()
      }, time * 1000);
    })
  }
  sleep(time) {
    this.pipeLine.push(this._sleep(time))
    return this
  }
  sleepFirst(time) {
    this.pipeLine.unshift(this._sleep(time))
    return this
  }
  eat(food) {
    this.pipeLine.push(() => console.log(`Eat ${food}~`))
    return this
  }
}
function LazyMan(name) {
  return new LazyManClass(name)
}

LazyMan('Hank').eat('dinner').eat('supper')
LazyMan('Hank').eat('dinner').sleepFirst(3)