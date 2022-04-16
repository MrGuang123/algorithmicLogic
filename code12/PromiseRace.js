// https://bigfrontend.dev/zh/problem/implement-Promise-race
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    }
  })
}