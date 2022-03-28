// 数组形式的整数加法
var addToArrayForm = function (num, k) {
  if (!Array.isArray(num) || typeof k !== 'number') {
    return false
  }

  let kCopy = k
  const result = []
  // 数组从最后一位开始加k，大于10再和数组倒数第二位相加，直到数组遍历完成或者k为0
  // 数组的push，reverse的时间要小于unshift时间
  for (let i = num.length - 1; i >= 0 || kCopy; i--) {
    let current = num[i] || 0

    if (kCopy) {
      current = kCopy + current
      kCopy = (current - current % 10) / 10
    }

    result.push(current % 10)
  }

  return result.reverse()
};

addToArrayForm([2, 1, 5], 806)
// addToArrayForm([1, 2, 0, 0], 34)
// addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516)