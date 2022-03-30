/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.stack = []
  this.maxSize = maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.stack.length < this.maxSize) {
    this.stack.push(x)
  }
  console.log('push', this.stack);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  const result = this.stack.length > 0 ? this.stack.pop() : -1
  console.log('pop', result);
  return result
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  for (let i = 0; i < k; i++) {
    if (this.stack[i] !== undefined) {
      this.stack[i] += val
    }
  }
  console.log('inc', this.stack);
};

const customStack = new CustomStack(3)
customStack.push(1);
customStack.push(2);
customStack.pop()
customStack.push(2);
customStack.push(3);
customStack.push(4);
customStack.increment(5, 100);
customStack.increment(2, 100);
customStack.pop()
customStack.pop()
customStack.pop()
customStack.pop()