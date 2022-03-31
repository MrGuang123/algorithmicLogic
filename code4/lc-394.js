/**
 * @param {string} s
 * @return {string}
 */
// TODO: 暂时先用正则版本，后面补充栈版本
const isNumber = (n) => !Number.isNaN(Number(n))
var decodeString = function (s) {
  const reg = /(\d+)\[(\w+)\]/g
  while (s.includes('[')) {
    s = s.replace(reg, ($, $1, $2) => $2.repeat($1))
  }
  return s
};

console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('3[a2[c]]'));