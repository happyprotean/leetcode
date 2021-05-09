/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let result
  const isFather = (x, y) => {
    if (x === null) return false
    if (y === null) return true
    if (x.val === y.val) return true
    return isFather(x.left, y) || isFather(x.right, y)
  }

  const dfs = node => {
    if (node === null) return node
    if (isFather(node, p) && isFather(node, q)){
      result = node
    }
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return result
};
// @lc code=end

