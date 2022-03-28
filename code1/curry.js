// 函数柯里化
function curry(func, ...params) {
  // 获取传入函数的形参
  const formalParams = func.length

  return (...args) => {
    // 收集实参
    const useArguments = [...params, ...args]

    // 如果实参不够继续柯里化
    if (useArguments.length < formalParams) {
      return curry(func, ...useArguments)
    }

    // 参数够了直接执行函数
    return func(...useArguments)
  }
}


function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying