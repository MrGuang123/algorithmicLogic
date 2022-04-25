// function compose(){
//   //请实现
// }

function compose(...args) {
  for (let i = 0, len = args.length; i < len; i++) {
    if (typeof args[i] !== 'function') {
      return false
    }
  }

  return (price) => {
    let sum = price;

    while (args.length) {
      const fn = args.pop()
      sum = fn(sum)
    }

    return sum
  }
}

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);
const discount = compose(normalizePrice, divide100, multiply20);
console.log(discount(200.0)); //40.00