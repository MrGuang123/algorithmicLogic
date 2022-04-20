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

function LazyMan(name) {
  this.name = name
  this.pipeLine = []
  this.pipeLine.push('console')


  return new LazyMan(name)
}

LazyMan.prototype = {
  console: function (msg) {
    console.log(`Hi! This is ${msg}!`)
  },
  sleep: function (time) {

  },
  sleepFirst: function (time) {

  },
  eat: function (food) {

  }
}