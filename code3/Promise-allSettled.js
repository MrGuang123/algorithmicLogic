function allSettled(promises) {
  return new Promise((resolve, reject) => {
    const result = []
    const pLength = promises.length
    if (promises.length === 0) {
      resolve([])
    }

    const newPromises = promises.map(pItem => {
      return pItem instanceof Promise ? pItem : Promise.resolve(pItem)
    })

    for (let i = 0; i < newPromises.length; i++) {
      newPromises[i].then(response => {
        result[i] = {
          status: 'fulfilled',
          value: response
        }
      }).catch(error => {
        result[i] = {
          status: 'rejected',
          reason: error
        }
      }).finally(() => {
        if (pLength === result.length) {
          resolve(result)
        }
      })
    }
  })
}

allSettled([1, 2, 3, Promise.reject('error')])