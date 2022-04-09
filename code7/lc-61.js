// https://leetcode-cn.com/problems/rotate-list/

var rotateRight = function (head, k) {
  if (k === 0 || !head || !head.next) {
    return head
  }

  let listCount = 1
  let current = head
  while (current.next) {
    current = current.next
    listCount++
  }

  let rotateNum = listCount - k % listCount
  if (rotateNum === listCount) {
    return head
  }

  current.next = head
  while (rotateNum) {
    current = current.next
    rotateNum--
  }

  const result = current.next
  current.next = null

  return result
}