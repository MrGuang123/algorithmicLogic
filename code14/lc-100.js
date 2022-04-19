// https://leetcode-cn.com/problems/same-tree/

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p == null && q == null) {
    return true
  } else if (p == null || q == null) {
    return false
  } else if (p.val != q.val) {
    return false
  } else {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
};