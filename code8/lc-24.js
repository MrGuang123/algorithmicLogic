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
// 创建一个新的链表result，prev表示当前到达的节点，
// 当前首先到达新创建的节点，然后next指向传入的链表
// 判断如果当前到达的下两个节点有值，则进行交换，否则没有值或者只有一个值直接退出循环
// 拿到要交换的两个值，注意赋值顺序，最后更新当前到达的节点为替换后处于后面位置的节点
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