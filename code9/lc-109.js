// https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
var sortedListToBST = function (head) {
  return buildTree(head, null)
};

const buildTree = function (left, right) {
  if (left === right) {
    return null
  }

  const middle = getMiddle(left, right)
  const rootNode = new TreeNode(middle.val)
  rootNode.left = buildTree(left, middle)
  rootNode.right = buildTree(middle.next, right)

  return rootNode
}

// 使用快慢针快速获取链表中位节点
const getMiddle = function (left, right) {
  let fast = left
  let slow = left;
  while (fast !== right && fast.next !== right) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
}