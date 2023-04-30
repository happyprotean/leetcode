/**
 * 二叉树
 */
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// 先序遍历
function tranverse(root) {
  // root操作
  tranverse(root.left)
  tranverse(root.right)
}


export default {
  TreeNode,
}