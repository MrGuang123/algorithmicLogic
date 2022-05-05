// https://bigfrontend.dev/zh/problem/two-way-binding

function model(state: { value: string }, element: HTMLInputElement) {
  element.value = state.value

  Object.defineProperty(state, 'value', {
    get: () => element.value,
    set: value => element.value = value
  })
}