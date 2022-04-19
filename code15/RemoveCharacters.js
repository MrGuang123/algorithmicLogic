// https://bigfrontend.dev/zh/problem/remove-characters

/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  let withoutB = input.replaceAll('b', '')

  while (withoutB.includes('ac')) {
    withoutB = withoutB.replaceAll('ac', '')
  }

  return withoutB
}