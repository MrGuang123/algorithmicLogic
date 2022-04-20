// https://leetcode-cn.com/problems/find-bottom-left-tree-value/

/**
 * 找出二叉树最底最左边的值
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  //  如果没有左右节点直接返回root值
  if (root.left === null && root.right === null) {
    return root.val;
  }

  // 定义一个队列，用来存放每个节点的值
  const queue = []
  // 将根节点放入
  queue.push(root)
  // 定义一个临时节点
  let temp = new TreeNode(-1)

  // 当队列有值的时候就是树还没有遍历完
  // 每次都是从队列前面取出值，然后先放入右子树值，再放入左子树值，最后取出的一定是最左边的值
  while (queue.length > 0) {
    temp = queue.shift()

    if (temp.right !== null) {
      queue.push(temp.right)
    }

    if (temp.left !== null) {
      queue.push(temp.left)
    }
  }

  return temp.val
};