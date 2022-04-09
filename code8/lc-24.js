// https://leetcode-cn.com/problems/swap-nodes-in-pairs/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let result = new ListNode()
  let prev = result
  prev.next = head

  while (prev.next && prev.next.next) {
    let node1 = prev.next
    let node2 = node1.next

    prev.next = node2
    node1.next = node2.next
    node2.next = node1
    prev = node1
  }

  return result.next
};