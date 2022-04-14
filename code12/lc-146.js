// https://leetcode-cn.com/problems/lru-cache/
/**
 * @param {number} capacity
 */
// Map是有序的
var LRUCache = function (capacity) {
  this.cacheLength = capacity
  this.cache = new Map()
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)

    return value
  } else {
    return -1
  }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
  }

  this.cache.set(key, value)

  if (this.cache.size > this.cacheLength) {
    this.cache.delete(this.cache.keys().next().value)
  }
};

var obj = new LRUCache(2)
obj.put(1, 1)
obj.put(2, 2)
var param_1 = obj.get(1)
obj.put(3, 3)
var param_1 = obj.get(2)
obj.put(4, 4)
var param_1 = obj.get(1)
var param_1 = obj.get(3)
var param_1 = obj.get(4)