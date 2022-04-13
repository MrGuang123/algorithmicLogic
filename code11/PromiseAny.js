// https://bigfrontend.dev/zh/problem/implement-Promise-any
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
  return new Promise((resolve, reject) => {
    promises = Array.isArray(promises) ? promises : []
    const length = promises.length
    const errorList = []

    if (length === 0) {
      return new AggregateError('No Promise in there')
    }

    promises.forEach((promise, index) => {
      promise.then(res => {
        resolve(res)
      }).catch(error => {
        errorList[index] = error

        if (errorList.length === promises.length) {
          reject(new AggregateError(
            'No Promise in Promise.any was resolved',
            errorList
          ))
        }
      })
    })
  })
}