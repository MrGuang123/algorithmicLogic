// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
var getIntersectionNode = function (headA, headB) {
  const record = new Set()
  let alinkedList = headA
  let bLinkedList = headB
  while (alinkedList) {
    record.add(alinkedList)
    alinkedList = alinkedList.next
  }

  while (bLinkedList) {
    if (record.has(bLinkedList)) {
      return bLinkedList
    }

    bLinkedList = bLinkedList.next
  }

  return null
};