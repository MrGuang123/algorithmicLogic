// https://bigfrontend.dev/zh/problem/implement-your-own-Object-create

// 该实现不支持第二个参数propertiesObject，即configurable等描述符
// 不是对象类型或者null直接返回TypeError
// create实际执行的操作就是将传入的对象挂载到一个新构造函数的原型上，并且返回该构造函数的实例
function myObjectCreate(proto) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object')
  } else if (proto === null) {
    throw new TypeError("doesn't support null")
  }

  function F() { }
  F.prototype = proto

  return new F()
}