/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function is(a, b) {
  // 只有NaN不等于自身，两个都是NaN返回false
  if (a !== a) {
    return b !== b
  }

  // 0和-0相等，但是被1除的时候一个是正无穷一个是负无穷
  if (a === 0 && b === 0) {
    return 1 / a === 1 / b
  }

  // 其他情况和全等操作符相同
  return a === b
}