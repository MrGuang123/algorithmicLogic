// 字符的最短距离
var shortestToChar = function (s, c) {
  const cIndexs = []
  const result = []
  for (let i = 0; i < s.length; i++) {
    s[i] === c && cIndexs.push(i)
  }

  for (let i = 0; i < s.length; i++) {
    result.push(Math.min(...cIndexs.map(ci => Math.abs(i - ci))))
  }

  return result;
};

shortestToChar('loveleetcode', 'e')
shortestToChar('aaab', 'b')