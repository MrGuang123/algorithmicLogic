// https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  return dfs(root, 0)
};

function dfs(node, preSum) {
  if (node === null) {
    return 0
  }

  const sum = node.val + preSum * 10
  if (node.left === null && node.right === null) {
    return sum
  } else {
    return dfs(node.left, sum) + dfs(node.right, sum)
  }
}