// https://bigfrontend.dev/zh/problem/implement-your-own-URLSearchParams
class MyURLSearchParams {
  /**
   * @params {string} init
   */
  constructor(init) {
    this.url = null
    this.params = []
    this.entriesIndex = 0

    if (typeof init === 'string') {
      const paramString = init.charAt(0) === '?' ? init.slice(1) : init
      this._parseQuery(paramString)
    }
  }

  _parseQuery(query) {
    if (query) {
      const attributes = query.split('&')
      const querys = attributes.map(attribute => {
        const [key, value] = attribute.split('=')

        return {
          key, value
        }
      })

      this.params = querys
    }
  }

  /** 
   * @params {string} name
   * @params {any} value
   */
  append(name, value) {
    this.params.push({
      key: name,
      value: value.toString() || value + ''
    })
  }

  /**
   * @params {string} name
   */
  delete(name) {
    this.params = this.params.filter(param => param.key !== name)
  }

  /**
   * @returns {Iterator} 
   */
  entries() {
    const result = this.params.map(param => ([param.key, param.value]))
    const obj = {}
    obj.next = function () {
      console.log('bbb', result, this.entriesIndex);
      const ret = {
        done: this.entriesIndex === result.length,
        value: result[this.entriesIndex]
      }
      this.entriesIndex++
      return ret
    }.bind(this)
    obj.valueOf = result

    return obj
  }

  /**
   * @param {(value, key) => void} callback
   */
  forEach(callback) {
    this.params.forEach(param => callback(param.value, param.key))
  }

  /**
   * @param {string} name
   * returns the first value of the name
   */
  get(name) {
    const findValue = this.params.find(param => param.key === name)

    return findValue?.value || null
  }

  /**
   * @param {string} name
   * @return {string[]}
   * returns the value list of the name
   */
  getAll(name) {
    return this.params.filter(param => param.key === name)
      .map(param => param.value)
  }

  /**
   * @params {string} name
   * @return {boolean}
   */
  has(name) {
    return this.params.findIndex(param => param.key === name) > -1
  }

  /**
   * @return {Iterator}
   */
  keys() {
    return this.params.map(param => param.key)
  }

  /**
   * @param {string} name
   * @param {any} value
   */
  set(name, value) {
    this.params = this.params.map(param => {
      if (param.key === name) {
        return {
          ...param,
          value: value.toString()
        }
      }

      return param
    })
  }

  // sor all key/value pairs based on the keys
  sort() {
    return this.params.sort((a, b) => {
      return a.key > b.key ? 1 : -1
    })
  }

  /**
   * @return {string}
   */
  toString() {
    return this.params.reduce((all, param, index) => {
      const prefix = index === 0 ? '' : '&'
      const singleParam = `${prefix}${param.key}=${param.value}`

      return all + singleParam
    }, '')
  }

  /**
   * @return {Iterator} values
   */
  values() {
    return this.params.map(param => param.value)
  }
}

const params = new MyURLSearchParams('?a=1&a=1&a=2&b=2')
const entries = params.entries()
console.log('aaa', entries.next());
console.log('aaa', entries.next());
console.log('aaa', entries.next());
console.log('aaa', entries.next());
console.log('aaa', entries.next());
// expect(entries.next()).toEqual({done: false, value: ['a','1']})
// expect(entries.next()).toEqual({done: false, value: ['a','1']})
// expect(entries.next()).toEqual({done: false, value: ['a','2']})
// expect(entries.next()).toEqual({done: false, value: ['b','2']})
//   expect(entries.next()).toEqual({done: true, value: undefined})